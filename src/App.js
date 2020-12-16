import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import FormulaireOffers from './components/FormulaireOffers.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <FormulaireOffers />
          <Switch>
          <Route path='/' exact component={Home} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
export default App;
