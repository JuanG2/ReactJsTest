/* import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';


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
const auth = getAuth();

export function signup(email,password){
    createUserWithEmailAndPassword(auth,email,password);
}

export function login(email,password){
  signInWithEmailAndPassword(auth,email,password);  
}

//Custom hook
export function useAuth(){
    const [currentUser, setCurrentUser] = useState();
    
    useEffect(()=> {
       const unsub = onAuthStateChanged(auth,user => setCurrentUser(user));
       return unsub;
    }, [])

    return currentUser;
}

export function logout(){
  return signOut(auth);
}

export const authentication = getAuth(app); */