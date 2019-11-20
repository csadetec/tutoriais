import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import logo from './assets/images/logo.png';
import Home from './Home'
import NewSeries from './NewSeries'
import Series from './Series'

const About = () => (
  <section className="intro-section">
    <h2>Sobre</h2>
  </section>
)

class App extends Component{
  
  render(){
    return(
      <Router>
        <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header page-scroll">
              <a className="navbar-brand page-scroll" href="#page-top">
                <img src={logo} height="30" alt="Logo do site"/>
              </a>
            </div>
            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/">Menu item</Link>
                </li>
                <li>
                  <Link to="/new">Nova Série</Link>
                </li>
                <li>
                  <Link to="/about">Sobre</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Route exact path="/" component = {Home} />
        <Route path='/series/:genre' component={Series} />
        <Route path="/new" component = {NewSeries} />
        <Route path="/about" component = {About} />
      </Router>   
    )
  }
}

export default App;
