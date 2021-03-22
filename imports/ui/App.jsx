import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

import LoggedRoute from '/imports/components/LoggedRoute';
import NoLoggedRoute from '/imports/components/NoLoggedRoute';

import Signin from './Signin';
import Signup from './Signup';
import Landing from './Landing';
import MissingPassword from './MissingPassword';

const App = () => (
  <Router>
    <Switch>
      <NoLoggedRoute exact path="/" component={Signin} />
      <NoLoggedRoute path="/signup" component={Signup} />
      <NoLoggedRoute path="/missing" component={MissingPassword} />
      <LoggedRoute path="/landing" component={Landing} />
    </Switch>
    <ToastContainer />
  </Router>
);

export default App;
