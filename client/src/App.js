import React, { Component } from 'react';
import './App.css';
import PurchaseContainer from './components/PurchaseContainer'
import LargePicture from './components/LargePicture'
import PictureRow from './components/PictureRow'
import Footer from './components/Footer'
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
        <PurchaseContainer/>
        <LargePicture picture={{"name": "anttila", "path": "http://127.0.0.1:9000/static/media/uploads/anttila.png", "owner": 1}}/>
        <PictureRow/>
        <Footer/>
      </div>
    );
  }
}

export default App;
