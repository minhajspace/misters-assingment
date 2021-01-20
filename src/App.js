import React from 'react'
import './App.css';
import Login from './components/Login'
import Signup from './components/Signup'
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from './components/dashboard'





function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
