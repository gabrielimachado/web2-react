import React, {Component} from 'react';
import './App.css'
import Header from './Header/'
import Container from './Container/'
import Footer from './Footer/'
import Doce from './Container/Doce'
import Salgado from './Container/Salgado'
import novaReceita from './Container/novaReceita'
import Contato from './Container/Contato'
import {BrowserRouter as Router, Route} from 'react-router-dom'


export default class App extends Component{
  render(){
  return (
    <Router>
      <Header/>
      <Route exact path='/' component={Container}/>
      <Route exact path='/doce' component={Doce}/>
      <Route exact path='/salgado' component={Salgado}/>
      <Route exact path='/novaReceita' component={novaReceita}/>
      <Route exact path='/contato' component={Contato}/>
      <Footer/>
    </Router>
    );
  }
}

// export default App;





