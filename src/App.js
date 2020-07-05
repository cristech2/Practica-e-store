import React, { Component } from 'react';
import Routes from "./Navigation";
import Footer from './components/footer'
class App extends Component {
  render() {
    return (
      <>
        <Routes></Routes>
        <Footer/>
      </>
    );
  }
}

export default App;
