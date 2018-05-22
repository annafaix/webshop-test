import React, { Component } from 'react';
import './App.css';
import ProductsList from './ProductsList.js';
import Form from './Form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Välkommen till Om-Bord</h1>
        </header>
        <ProductsList />
        <Form/>
      </div>
    );
  }
}

export default App;
