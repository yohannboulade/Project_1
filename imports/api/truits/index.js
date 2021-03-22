import { Mongo } from 'meteor/mongo';

const TruitCollection = new Mongo.Collection('truits');

export default TruitCollection;
