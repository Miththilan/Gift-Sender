import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8-Ag28eHM146XN2eS8qcL4Ga7xaaXwt0",
  authDomain: "giftsenderapp-b1ac1.firebaseapp.com",
  projectId: "giftsenderapp-b1ac1",
  storageBucket: "giftsenderapp-b1ac1.appspot.com",
  messagingSenderId: "886784571623",
  appId: "1:886784571623:web:f97d87fa6a6fecb7378a42",
  measurementId: "G-71K38LW80Z",
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
