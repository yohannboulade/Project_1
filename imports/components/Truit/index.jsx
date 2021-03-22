import { Meteor } from 'meteor/meteor';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import Wrapper from './Wrapper';
import Extra from './Extra';

const Truit = ({ truit }) => {
  const [email, setEmail] = useState('chargement...');

  useEffect(() => {
    Meteor.call('users.getEmail', truit.userId, (error, result) => {
      if (error) {
        toast.error(error.reason);
      } else {
        setEmail(result);
      }
    });
  }, []);

  return (
    <Wrapper>
      {truit.content}
      <Extra>
        Le
        {' '}
        {truit.createdAt.getDate()}
        /
        {truit.createdAt.getMonth() + 1}
        /
        {truit.createdAt.getFullYear()}
        {' '}
        à
        {' '}
        {truit.createdAt.getHours()}
        :
        {truit.createdAt.getMinutes()}
        {' '}
        par
        {' '}
        {email}
      </Extra>
    </Wrapper>
  );
};

export default Truit;
