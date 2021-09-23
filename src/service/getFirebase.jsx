import firebase from "firebase";
import 'firebase/firestore'







const firebaseConfig = {
    apiKey: "AIzaSyAahyMIppueeKANRWzZmI0RqBfphnaZol8",
    authDomain: "flex-2cf2c.firebaseapp.com",
    projectId: "flex-2cf2c",
    storageBucket: "flex-2cf2c.appspot.com",
    messagingSenderId: "48604756131",
    appId: "1:48604756131:web:75f264570b405f5c882716"
};
  
  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);



export function getFirestore(){
    return firebase.firestore(app)
}