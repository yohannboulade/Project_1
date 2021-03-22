import { Accounts } from 'meteor/accounts-base';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Page from '/imports/components/Page';

const MissingPassword = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    Accounts.forgotPassword({ email }, (error) => {
      if (error) {
        toast.error(error.reason);
      } else {
        toast.success('Un email vient de vous être envoyé =)');
      }
    });
  };

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'email':
        setEmail(event.target.value);
        break;
        // no default
    }
  };
  return (
    <Page>
      <h2>J&apos;ai perdu mon mot de passe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <button type="submit">Retrouver votre mot de passe</button>
      </form>
    </Page>
  );
};

export default MissingPassword;
