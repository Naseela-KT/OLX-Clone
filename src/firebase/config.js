import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAD8OPNSkKoFu4gveKt3KlHDAzk1uo0FkI",
    authDomain: "olx-clone-b3a1b.firebaseapp.com",
    projectId: "olx-clone-b3a1b",
    storageBucket: "olx-clone-b3a1b.appspot.com",
    messagingSenderId: "388003896799",
    appId: "1:388003896799:web:e50490bb75663c62cb786a",
    measurementId: "G-80VGYK95V2"
  };


export default firebase.initializeApp(firebaseConfig)