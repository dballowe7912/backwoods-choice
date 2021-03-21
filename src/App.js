import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Meats from './pages/Meats/Meats';
import SteakMenu from './SteakMenu/SteakMenu';
import ChickenMenu from './ChickenMenu/ChickenMenu';
import {steaks, chicken, pork, seafood} from './data.js';

import './App.css';
import PorkMenu from './PorkMenu/PorkMenu';
import SeafoodMenu from './SeafoodMenu/SeafoodMenu';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/seafood-menu'>
          <SeafoodMenu
            title='Gourmet Seafood'
            data={seafood}
          />
        </Route>
        <Route path='/pork-menu'>
          <PorkMenu
            title='Fine Pork'
            data={pork}
          />
        </Route>
        <Route path='/chicken-menu'>
          <ChickenMenu
            title='Gourmet Chicken'
            data={chicken}
          />
        </Route>
        <Route path='/steak-menu'>
          <SteakMenu
            title='USDA Steaks'
            data={steaks}
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
