import './Buttonsign.css'
import {auth} from '../firebase-config';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const signInWhitGoogle = () =>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((re) =>{
        console.log(re);
    })
    .catch((err=>{
        console.log(err)
    }))
}

const Buttonsigngoogle = (props) => { 
return(
    <button  onClick={signInWhitGoogle} className="button_signin_google">{props.text}</button>
)

};

export default Buttonsigngoogle;