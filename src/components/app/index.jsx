import React from 'react';
import './index.css';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import SyncContainer from '../syncContainer';
import BrowseContainer from '../browseConatiner';
import PopContainer from '../popContainer';
import RockContainer from '../rockContainer';
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
          <Route exact path="/browse">
            <BrowseContainer />
          </Route>
          <Route exact path="/pop">
            <PopContainer />
          </Route>
          <Route exact path="/rock">
            <RockContainer />
          </Route>
          <Route exact path="*">
            <BrowseContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
