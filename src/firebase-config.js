import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCHmUUymhoqgrf7jj69grubg9TEzLI2qaw",
  authDomain: "reactjstest-883dc.firebaseapp.com",
  projectId: "reactjstest-883dc",
  storageBucket: "reactjstest-883dc.appspot.com",
  messagingSenderId: "397848104328",
  appId: "1:397848104328:web:4b04d7aa12b2841ca73e3d",
  measurementId: "G-JC0NHXP1Z9"
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);