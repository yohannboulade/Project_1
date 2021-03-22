import { Meteor } from 'meteor/meteor';
import React from 'react';

import Wrapper from './Wrapper';

const Navigation = () => (
  <Wrapper>
    <h1>Truiteur - le microbloging made in France</h1>
    <button type="button" onClick={() => Meteor.logout()}>Déconexion</button>
  </Wrapper>
);

export default Navigation;
