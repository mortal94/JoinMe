import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCh4vZWjZqkvZTZQmncsoB2ozTgZ3tPf-Q",
  authDomain: "joinme-f6b2b.firebaseapp.com",
  databaseURL: "https://joinme-f6b2b.firebaseio.com/",
};
firebase.initializeApp(config);

export const database = firebase.database();
