import firebase from "firebase";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCEexosdkkQ304n_ZNN-bF0FtgQ3phZ1OI",
  authDomain: "food-order-app-firebase.firebaseapp.com",
  projectId: "food-order-app-firebase",
  storageBucket: "food-order-app-firebase.appspot.com",
  messagingSenderId: "472178585507",
  appId: "1:472178585507:web:ad5e68254b1de697097416",
  measurementId: "G-HC01QT09H1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const database = firebase.database();
const functions = firebase.functions();
const addMessages = firebase.messaging;

export {
  auth,
  provider,
  firebaseApp,
  storage,
  database,
  functions,
  addMessages,
};
export default db;
