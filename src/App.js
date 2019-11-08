import React, {Component} from 'react';
import './App.css'
import Header from './Header/'
import Container from './Container/'
import Footer from './Footer/'
// import {BrowserRouter as Router, Route} from 'react-router-dom'


export default class App extends Component{
  render(){
  return (
    <>
      <Header/>
      <Container/>
      <Footer/>
    </>
    );
  }
}

// export default App;
