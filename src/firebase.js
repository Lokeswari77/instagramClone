import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAzLM0CVZ87aMWWRIf306nwjs8joomHqDM",
  authDomain: "instagram-clone-8b083.firebaseapp.com",
  projectId: "instagram-clone-8b083",
  storageBucket: "instagram-clone-8b083.appspot.com",
  messagingSenderId: "430347752248",
  appId: "1:430347752248:web:34ba1f3ae58cabd1df67cd"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth()