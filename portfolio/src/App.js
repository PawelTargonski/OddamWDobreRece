import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './components/Home/Home.js';
import Navigation from './components/Navigation/Navigation.js';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={Navigation}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
