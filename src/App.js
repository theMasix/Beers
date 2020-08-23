import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Redirect, Switch } from 'react-router-dom';
import NavBar from './components/navBar';
import './App.css';
import ShopingCard from './components/shoping-card';
import Favorites from './components/favorites';
import  Home from './components/home';
import 'react-toastify/dist/ReactToastify.css';
// import NotFounf from './components/not-found';

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <ToastContainer />
        <NavBar />
        <main className="container" style={{marginTop:"10rem"}}>
          <Switch>
            <Route path="/favorites" component={Favorites}></Route>
            <Route path="/shopingCard" component={ShopingCard}></Route>
            <Route path="/home" component={Home}></Route>
            <Redirect from="/" exact to="/home" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
