import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './components/Home/Home.js';
import Register from './components/LoginLayout/Register.js';
import Login from './components/LoginLayout/Login.js';
import Logout from './components/LoginLayout/Logout.js';
import TreeColumns from './components/TreeColumns/TreeColumns.js';
import WhoDoWeHelp from './components/WhoDoWeHelp/WhoDoWeHelp.js';
import EasySteps from './components/EasySteps/EasySteps.js';
import Formular from './components/Formular/Formular.js';
import Contact from './components/Contact/Contact.js';
import AboutUs from './components/AboutUs/AboutUs.js';
import Footer from './components/Footer/Footer.js';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />  
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/treecolumns" component={TreeColumns} />
          <Route exact path="/whodowehelp" component={WhoDoWeHelp} />
          <Route exact path="/easysteps" component={EasySteps} />
          <Route exact path="/formular" component={Formular} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/footer" component={Footer} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
