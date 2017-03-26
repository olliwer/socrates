import React, { Component } from 'react';
import './App.css';
import PurchaseContainer from './components/PurchaseContainer'
import LargePicture from './components/LargePicture'
import PictureRow from './components/PictureRow'
import Footer from './components/Footer'
import Login from './components/Login'
import {fetchLargePicture} from './services/picturesService';

const initialState = {
  loading: true,
  user: {
    isAuthenticated: false,
    loading: false,
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
  smallPictures: []
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    fetchLargePicture().then((response) => {
      const largePicture = {...response, loading: false};
      this.setState({largePicture: largePicture});
    });
  }
  componentDidMount() {
    this.setState({loading: false});
  }
  render() {
    return (
      <div className="App">
        <Login/>
        <PurchaseContainer/>
        <LargePicture picture={this.state.largePicture}/>
        <PictureRow/>
        <Footer/>
      </div>
    );
  }
}

export default App;
