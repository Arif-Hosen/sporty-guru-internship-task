import logo from './logo.svg';
import './App.css';
import { Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import UniversityDetails from './pages/UniversityDetails/UniversityDetails';

function App() {


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/details/:domains'>
            <UniversityDetails></UniversityDetails>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
