import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const LoggedRoute = ({ exact, path, component }) => {
  const userId = useTracker(() => Meteor.userId(), []);

  if (!userId) {
    return (
      <Redirect to="/" />
    );
  }

  return (
    <Route exact={exact} path={path} component={component} />
  );
};

export default LoggedRoute;
