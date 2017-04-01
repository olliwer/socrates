import React, { Component } from 'react';
import './App.css';
import PurchaseContainer from './components/PurchaseContainer'
import LargePicture from './components/LargePicture'
import PictureRow from './components/PictureRow'
import Footer from './components/Footer'
import Login from './components/Login'
import {
  checkAuthenticationService,
  authenticateService,
  largePictureService,
  smallPictureService
} from './services';

const initialState = {
  loading: true,
  user: {
    isAuthenticated: false,
    loading: true,
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

    checkAuthenticationService().then((response) => {
      let user = this.state.user;
      if (response.key) {
        user.isAuthenticated = true
        user.loading = false
        user.authToken = response.key
        user.firstName = response.user.first_name
        user.lastName = response.user.last_name
        user.email = response.user.email
      } else {
        user.loading = false
      }
      this.setState({user: user});
    });

    largePictureService().then((response) => {
      const largePicture = {...response, loading: false};
      this.setState({largePicture: largePicture});
    });

    smallPictureService(1).then((response) => {
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

  updateScore = (score, picture) => {
    this.setState(this.state.smallPictures.pictures.map(function(pic) {
       if (pic.id===picture) {
          pic.score += score
       }
       return pic
    }));
  }

  render() {
    return (
      <div className="App">
        <Login authenticate={this.authenticate} user={this.state.user}/>
        <PurchaseContainer/>
        <LargePicture picture={this.state.largePicture}/>
        <PictureRow pictures={this.state.smallPictures.pictures} token={this.state.user.authToken} updateScore={this.updateScore}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
