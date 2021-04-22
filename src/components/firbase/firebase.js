import firebase from "firebase";
import { firebaseConfigKey } from "../config/config"

const firebaseApp = firebase.initializeApp(firebaseConfigKey);

const auth = firebase.auth();

export { auth };