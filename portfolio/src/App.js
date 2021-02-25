import React from 'react';
import logo from './logo.svg';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
