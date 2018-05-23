import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCh4vZWjZqkvZTZQmncsoB2ozTgZ3tPf-Q",
  authDomain: "joinme-f6b2b.firebaseapp.com",
  databaseURL: "https://joinme-f6b2b.firebaseio.com/",
};
firebase.initializeApp(config);

class FirebaseGateway {
  async signup(email, pass) {
    try {
      await firebase.auth()
        .createUserWithEmailAndPassword(email, pass);
    } catch (error) {
      console.log(error.toString())
    }
  }

  async login(email, pass) {
    try {
      await firebase.auth()
        .signInWithEmailAndPassword(email, pass);
    } catch (error) {
      console.log(error.toString());
      throw error;
    }
  }
}

export default new FirebaseGateway();


