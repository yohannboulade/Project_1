import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import Page from '/imports/components/Page';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('HANDLE SUBMIT FIRED !');

    Meteor.loginWithPassword(email, password, (error) => {
      if (error) {
        toast.error(error.reason);
      }
    });
  };

  const handleChange = (event) => {
    console.log('HANDLE SUBMIT FIRED !');
    switch (event.target.name) {
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
        // no default
    }
  };
  return (
    <Page>
      <h1>Bienvenue sur Trumper !</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          autoComplete="email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input
          placeholder="Mot de passe"
          autoComplete="current"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit">
          Connexion
        </button>
        <Link to="/signup">Inscription</Link>
      </form>
    </Page>
  );
};

export default Signin;
