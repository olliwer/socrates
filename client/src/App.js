import React, { Component } from 'react';
import './App.css';
import PurchaseContainer from './components/PurchaseContainer'
import PictureRow from './components/PictureRow'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PurchaseContainer/>
        <PictureRow/>
      </div>
    );
  }
}

export default App;
