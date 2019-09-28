import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Login from './components/login';
import './css/common.css';

function App() {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
