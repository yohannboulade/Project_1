import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import Page from '/imports/components/Page';
import Truits from '/imports/components/Truits';

const Landing = () => {
  const [truit, setTruit] = useState('');

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'truit':
        setTruit(event.target.value.substring(0, 255));
        break;
      // no default
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    Meteor.call('truits.create', truit, (error, result) => {
      if (error) {
        toast.error(error.reason);
      } else {
        setTruit('');
        toast.success(`Le truit à été publié avec l'id ${result}`);
      }
    });
  };

  return (
    <Page>
      <nav>
        <h1>Truiteur - le microbloging made in France</h1>
        <button type="button" onClick={() => Meteor.logout()}>Déconexion</button>
      </nav>
      <form onSubmit={handleSubmit}>
        <textarea
          name="truit"
          onChange={handleChange}
          value={truit}
          placeholder="Comment ça va ?"
        />
        <button type="submit">Publier</button>
      </form>
      <Truits />
    </Page>
  );
};

export default Landing;
