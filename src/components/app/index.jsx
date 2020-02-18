import React from 'react';
import './index.css';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import SyncContainer from '../syncContainer';
import Header from '../header';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <SyncContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
