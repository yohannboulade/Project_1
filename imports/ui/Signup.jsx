import { Accounts } from 'meteor/accounts-base';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Page from '/imports/components/Page';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerification, setPasswordVerification] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== passwordVerification) {
      toast.error('Les mots de passe ne correpondent pas');
      return;
    }

    Accounts.createUser({ email, password }, (error) => {
      if (error) {
        toast.error(error.reason);
      } else {
        toast.success(`Bienvenue ${email}`);
      }
    });
  };

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      case 'passwordVerification':
        setPasswordVerification(event.target.value);
        break;
        // no default
    }
  };
  return (
    <Page>
      <h1>Inscrivez-vous sur Trumper !</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          autoComplete="email"
          type="email"
          name="email"
          onChange={handleChange}
        />
        <input
          placeholder="Mot de passe"
          autoComplete="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <input
          placeholder="Vérification du mot de passe"
          autoComplete="new-password"
          type="password"
          name="passwordVerification"
          value={passwordVerification}
          onChange={handleChange}
        />
        <button type="submit">
          Inscription
        </button>
        <Link to="/">J&apos;ai déjà un compte</Link>
      </form>
    </Page>
  );
};

export default Signup;
