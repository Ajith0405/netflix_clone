import {initializeApp} from "firebase/app"
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAIi6VbIBdfA582WZhOIyluvjsrXI3tHEM",
    authDomain: "netflix-clone-b94c3.firebaseapp.com",
    projectId: "netflix-clone-b94c3",
    storageBucket: "netflix-clone-b94c3.appspot.com",
    messagingSenderId: "692412834822",
    appId: "1:692412834822:web:c83eb893f3a44e899ccf87"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getFirestore();

  export {app,auth,db};