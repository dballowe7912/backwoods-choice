import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Meats from './pages/Meats/Meats';
import SteakMenu from './SteakMenu/SteakMenu';
import ChickenMenu from './ChickenMenu/ChickenMenu';

import './App.css';
import PorkMenu from './PorkMenu/PorkMenu';
import SeafoodMenu from './SeafoodMenu/SeafoodMenu';

function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Navbar/> */}
      <Switch>
        <Route path='/seafood-menu'>
          <SeafoodMenu/>
        </Route>
        <Route path='/pork-menu'>
          <PorkMenu/>
        </Route>
        <Route path='/chicken-menu'>
          <ChickenMenu/>
        </Route>
        <Route path='/steak-menu'>
          <SteakMenu/>
        </Route>
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
