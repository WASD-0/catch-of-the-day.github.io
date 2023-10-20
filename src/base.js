import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

  apiKey: "AIzaSyAPDYn2wPatrrKFPrAbddOMlFtCYt_Ptcs",
  authDomain: "catch-of-the-day-bailey.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-bailey-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());


//this a named export
export { firebaseApp };

// this is a default export

export default base;
