import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const NoLoggedRoute = ({ exact, path, component }) => {
  const userId = useTracker(() => Meteor.userId(), []);

  if (userId) {
    return (
      <Redirect to="/landing" />
    );
  }

  return (
    <Route exact={exact} path={path} component={component} />
  );
};

export default NoLoggedRoute;
