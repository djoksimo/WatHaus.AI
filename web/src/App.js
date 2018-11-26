import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto';
import Home from "./Components/Home/Home";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bg">
          <Home/>
        </div>
      </div>
    );
  }
}
export default App;
