import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './components/Home/Home.js';
import Register from './components/LoginLayout/Register.js';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
