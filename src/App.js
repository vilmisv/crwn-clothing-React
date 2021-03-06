import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomePage from '../src/pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './component/header/header.component.jsx';

function App() {
  return (
    <div>
    <Header/>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
    </Switch>

    </div>
  );
}

export default App;
