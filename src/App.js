import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Meats from './pages/Meats/Meats';
import MenuContainer from './MenuContainer/MenuContainer';
import { steaks, chicken, pork, seafood, price } from './data.js';

import './App.css';


function App() {
  console.log(price)
  return (
    <div className="App">
      <Switch>
        <Route path='/seafood-menu'>
          <MenuContainer
            title='Gourmet Seafood'
            data={seafood}
            price={price.seafood}
          />
        </Route>
        <Route path='/pork-menu'>
          <MenuContainer
            title='Fine Pork'
            data={pork}
            price={price.pork}
          />
        </Route>
        <Route path='/chicken-menu'>
          <MenuContainer
            title='Gourmet Chicken'
            data={chicken}
            price={price.chicken}
          />
        </Route>
        <Route path='/steak-menu'>
          <MenuContainer
            title='USDA Steaks'
            data={steaks}
            price={price.steaks}
          />
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
