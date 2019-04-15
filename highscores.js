// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD5da5VdY_xRMVKEMYthAGVmRiekALaEv4",
    authDomain: "grav-ball-f2b73.firebaseapp.com",
    databaseURL: "https://grav-ball-f2b73.firebaseio.com",
    projectId: "grav-ball-f2b73",
    storageBucket: "grav-ball-f2b73.appspot.com",
    messagingSenderId: "373906891112"
}

firebase.initializeApp(firebaseConfig);