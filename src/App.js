import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Meats from './pages/Meats';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Switch>
        <Route path='/about'>
          <AboutPage/>
        </Route>
        <Route path='/contact'>
          <ContactPage/>
        </Route>
        <Route path='/meats'>
          <Meats/>
        </Route>
        <Route path='/'>
          <HomePage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
