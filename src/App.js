import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/navigation';
import Home from './components/home';
import Footer from './components/footer';


function App() {
  return (
    <Router>

      <Navigation />
      <Route path='/' exact component={Home} />
      <Footer/>
     
    </Router>
  );
}

export default App;
