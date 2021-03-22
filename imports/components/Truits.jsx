import { Meteor } from 'meteor/meteor';
import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import TruitCollection from '/imports/api/truits';
import Truit from '/imports/components/Truit';

const Truits = () => {
  const [loading, truits] = useTracker(() => {
    const publication = Meteor.subscribe('truits.getAll');
    const data = TruitCollection.find({}, { sort: { createdAt: -1 } }).fetch();

    return [
      !publication.ready(),
      data,
    ];
  }, []);

  const displayedTruits = truits.map((truit) => (
    <Truit key={truit._id} truit={truit} />
  ));
  if (loading) {
    return <h3>Chargemment =)</h3>;
  }
  return (
    <div>
      {displayedTruits}
    </div>
  );
};

export default Truits;
