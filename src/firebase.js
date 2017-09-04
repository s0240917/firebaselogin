import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBba-RbacHGsvNFu7T6yUPfwuAdtCsYXiA",
    authDomain: "goalcoach-7360c.firebaseapp.com",
    databaseURL: "https://goalcoach-7360c.firebaseio.com",
    projectId: "goalcoach-7360c",
    storageBucket: "",
    messagingSenderId: "625335881730"
  };

  export const firebaseApp =firebase.initializeApp(config);
