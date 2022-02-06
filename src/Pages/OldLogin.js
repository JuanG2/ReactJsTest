/* import { async } from "@firebase/util";
import { useRef, useState } from "react";
import { signup,login,logout, useAuth } from "../firebase-config";


const Login = () =>{

    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();
    
    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleSignup(){

        setLoading(true);
        try{
        await signup(emailRef.current.value,passwordRef.current.value);
        } catch{
          alert("Error!");
        }
        setLoading(false);
    }

    async function handleLogIn(){
        setLoading(true);
        try{
        await login(emailRef.current.value,passwordRef.current.value);
        } catch{
          alert("Error!");
        }
        setLoading(false);
    }

    async function handleLogout(){
        setLoading(true);
        try{
        await logout();
        }
        catch{
            alert("Error!");
        }
        setLoading(false);
    }

    return(
        <div className='main_login'>
            <div>Currently logged in as: {currentUser?.email}</div>
            <div className = "fields">
                <input ref={emailRef} placeholder="Email"/>
                <input ref={passwordRef} type="password" placeholder="Password"/>
            </div>

            <button disabled={loading || currentUser} onClick={handleSignup}>Sign Up</button>
            <button disabled={loading || currentUser} onClick={handleLogIn}>Log In</button>
            <button disabled={loading || !currentUser} onClick={handleLogout}>Log Out</button>

        </div>
    );
}


const [user,setUser] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPasword] = useState('');
  const [emailError,setEmailError] = useState('');
  const [passwordError,setPasswordError] = useState('');
  const [hasAcount,setHasAccount] = useState('false');


  const handleLogin = () =>{
    fire
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch(err =>{
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "with/wrong-password":
          setPasswordError(err.message);
          break;
      }
    });
  };

  const handleSignup = () =>{
    fire
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch(err =>{
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "with/wrong-password":
          setPasswordError(err.message);
          break;
      }
    });
  }
  
export default Login; */