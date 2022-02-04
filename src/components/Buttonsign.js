import './Buttonsign.css'
import {authentication} from '../firebase-config';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const signInWhitGoogle = () =>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
    .then((re) =>{
        console.log(re);
    })
    .catch((err=>{
        console.log(err)
    }))
}

const buttonsign = (props) => { 
return(
    <button  onClick={signInWhitGoogle} className="button_signin">{props.text}</button>
)

};

export default buttonsign;