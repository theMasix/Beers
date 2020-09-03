import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Redirect, Switch } from 'react-router-dom';
import NavBar from './components/navBar';
// import Footer from './components/footer'
import './App.css';
import ShopingCart from './components/shoping-cart';
import Favorites from './components/favorites';
import  Home from './components/home';
import 'react-toastify/dist/ReactToastify.css';
 import NotFounf from './components/not-found';

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <ToastContainer />
        <NavBar />
        <main className="container" style={{marginTop:"10rem"}}>
          <Switch>
            <Route path={`/favorites`} component={Favorites}></Route>
            <Route path={`/shopingCard`} component={ShopingCart}></Route>
            <Route path={`/home`} component={Home}></Route>
            <Route path={`/not-found`} component={NotFounf}></Route>
            <Redirect from={`/`} exact to={`/home`} />
            <Redirect to={`/not-found`} />
          </Switch>
        </main>
        {/* <Footer/> */}
      </React.Fragment>
    );
  }
}

export default App;
