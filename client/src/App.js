import React, { Component } from 'react';
import './App.css';
import PurchaseContainer from './components/PurchaseContainer'
import LargePicture from './components/LargePicture'
import PictureRow from './components/PictureRow'
import Footer from './components/Footer'
import Login from './components/Login'
import {authenticateService, largePictureService, smallPictureService} from './services';

const initialState = {
  loading: true,
  user: {
    isAuthenticated: false,
    loading: false,
    authToken: '',
    firstName: '',
    lastName: '',
    email: ''
  },
  largePicture: {
    loading: true,
    name: '',
    path: '',
    owner: ''
  },
  smallPictures: {
    loading: true,
    pictures: []
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    // load the large picture from server
    largePictureService().then((response) => {
      const largePicture = {...response, loading: false};
      this.setState({largePicture: largePicture});
    });

    smallPictureService().then((response) => {
      const smallPictures = this.state.smallPictures;
      smallPictures.pictures = response;
      this.setState({smallPictures: smallPictures});
    });
  }

  authenticate = (oauth2Response) => {
    this.setState({user: {loading: true}});
    authenticateService(oauth2Response).then((response) => {
      this.setState({
        user: {
          isAuthenticated: true,
          loading: false,
          authToken: response.token,
          firstName: response.firstName,
          lastName: response.lastName,
          email: response.email
        }
      })
    });
  }

  componentDidMount() {
    this.setState({loading: false});
  }
  render() {
    return (
      <div className="App">
        <Login authenticate={this.authenticate} user={this.state.user}/>
        <PurchaseContainer/>
        <LargePicture picture={this.state.largePicture}/>
        <PictureRow pictures={this.state.smallPictures.pictures}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
