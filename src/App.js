import React from 'react';
import  { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';



import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
