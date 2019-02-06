import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';
//import CssModules from 'react-css-modules';


import Navbar from './components/navbar';
import Register from './components/register';
import Login from './components/login';
import Home from './components/home';

//import styles from './styles/main.css';

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);

  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
}

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router>
          <div>
            <Navbar />
              <Route exact path = "/" component = { Home } />
              <Route exact path = "/register" component = { Register } />
              <Route exact path = "/login" component = { Login } />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
