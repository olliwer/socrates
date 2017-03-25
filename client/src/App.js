import React, { Component } from 'react';
import './App.css';
import PurchaseContainer from './components/PurchaseContainer'
import LargePicture from './components/LargePicture'
import PictureRow from './components/PictureRow'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PurchaseContainer/>
        <LargePicture picture={{"name": "anttila", "path": "http://127.0.0.1:9000/static/media/uploads/anttila.png", "owner": 1}}/>
        <PictureRow/>
      </div>
    );
  }
}

export default App;
