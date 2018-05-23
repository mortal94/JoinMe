import firebase from 'firebase';
import { AsyncStorage } from 'react-native';

const config = {
  apiKey: 'AIzaSyCh4vZWjZqkvZTZQmncsoB2ozTgZ3tPf-Q',
  authDomain: 'joinme-f6b2b.firebaseapp.com',
  databaseURL: 'https://joinme-f6b2b.firebaseio.com/'
};
firebase.initializeApp(config);

class FirebaseGateway {
  async signup(email, pass) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, pass);
    } catch (error) {
      console.log(error.toString());
    }
  }

  async saveUserData(firstName, secondName) {
    try {
      await firebase
        .database()
        .ref(`users/${this.getCurrentUser().uid}`)
        .set({
          firstName,
          secondName
        });
    } catch (error) {
      console.log(error.toString());
    }
  }

  async login(email, pass) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, pass);
    } catch (error) {
      console.log(error.toString());
      throw error;
    }
  }

  async addMeeting(place, type, age, skill, date) {
    try {
      await firebase.database().ref('meetings').push()
        .set({
          place,
          type,
          age,
          skill,
          date,
          user: this.getCurrentUser().uid
        });
    } catch (error) {
      console.log(error.toString());
    }
  }

  async getAllMeetings(listener, onError) {
    try {
      await firebase.database().ref('meetings')
        .on('value', listener, onError)
    } catch (error) {
      console.log(error.toString());
    }
  }

  getCurrentUser() {
    return firebase.auth().currentUser;
  }
}

export default new FirebaseGateway();
