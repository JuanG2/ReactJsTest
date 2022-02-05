import { useRef, useState } from "react";

import { signup, useAuth } from "../firebase-config";


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

    return(
        <div className='main_login'>
            <div>Currently logged in as: {currentUser.email}</div>
            <div className = "fields">
                <input ref={emailRef} placeholder="Email"/>
                <input ref={passwordRef} type="password" placeholder="Password"/>
            </div>

            <button disabled={loading} onClick={handleSignup}>Sign Up</button>
        </div>
    );
}

export default Login;