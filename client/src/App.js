import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import LoginPage from './authPages/LoginPage/LoginPage';
import RegisterPage from './authPages/RegisterPage/RegisterPage';
import Dashboard from './Dashboard/Dashboard';
import AlertNotification from './shared/components/AlertNotification';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/login' >
            <LoginPage />
          </Route>
          <Route exact path='/register' >
            <RegisterPage />
          </Route>
          <Route exact path='/dashboard'>
            <Dashboard />
          </Route>
        <Route path='/'>
          <Redirect to='/dashboard' />
        </Route> 
        </Switch>
      </Router>
      <AlertNotification />
    </>
  );
}

export default App;
