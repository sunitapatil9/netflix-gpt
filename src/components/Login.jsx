import { useRef, useState } from "react";
import Header from "./Header";
import CheckValidationForForm from "../utils/validate";
import {createUserWithEmailAndPassword , signInWithEmailAndPassword ,updateProfile } from "firebase/auth"
import  { auth }  from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMAGE } from "../utils/constants";

const Login = () =>{

    const [isSignInAccess, setIsSignInAccess] = useState(true);
    const [ emailError , setEmailError ] = useState('');
    const [ passwordError, setPasswordError ] = useState('');
    const [ usernameError, setUserNameError ] = useState('');
    const [ signinerror ,setSignInError]  = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const email = useRef(null);
    const password = useRef(null);
    const username = useRef(null);

    

    const handleSignInForm = () =>{
        const {emailError , passwordError } =  isSignInAccess ?
            CheckValidationForForm(email.current.value , password.current.value ):
            CheckValidationForForm(email.current.value , password.current.value ,username.current.value );

       if(usernameError){
        setUserNameError(usernameError);
       }
       if(emailError){
        setEmailError(emailError);
       }
       if(passwordError){
        setPasswordError(passwordError);
       }

       if(isSignInAccess){
            if(!emailError && !passwordError){
                // sign in form
                signInWithEmailAndPassword(auth, email.current.value , password.current.value)
                    .then((userCredential) => {
                        const user = userCredential.user;
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setSignInError("user not found")
                    });

                setEmailError("");
                setPasswordError("");
            }
        }
        else{
            if(!emailError && !passwordError && !usernameError){
                // this is signup form
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value ,)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        updateProfile(user, {
                            displayName: username.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                          }).then(() => {
                            const {uid, email , displayName, photoURL } = auth.currentUser;
                            dispatch(addUser({uid : uid, email : email,displayName : displayName,photoURL :photoURL}));
                          }).catch((error) => {
                          });
                        
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                    });
                setEmailError("");
                setPasswordError("");
                setUserNameError("");
            }
        }
    }

    const handleIsAccessForm = () =>{
        setIsSignInAccess(!isSignInAccess);
    }
    return(
        <div>
            <Header/>
            <div className="absolute">
                <img className="bg-gradient-to-t from-black" src={BACKGROUND_IMAGE}
                alt="background image"/>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="bg-black opacity-85 text-white absolute w-3/12  right-0 left-0 my-35 mx-130 p-6 m-6">
                    <h1 className=" font-bold py-4 text-2xl">{isSignInAccess ? "Sign In" : "Sign Up"}</h1>
                    { !isSignInAccess &&<input type="text" ref={username} className="p-2 my-3 w-full bg-gray-700"
                     placeholder="Enter your name" /> }
                    <input ref={email} type="text" className="p-2 my-3 w-full bg-gray-700 " placeholder="Email or mobile number" />
                    {emailError && <p className="text-red-600">{emailError}</p>}
                    <input ref={password} type="password" className="p-2 my-3 w-full bg-gray-800"  placeholder="Password" />
                    {passwordError &&  <p className="text-red-600">{passwordError}</p>}
                    <button type="submit" className="w-full p-2 my-3 bg-red-600 cursor-pointer"
                     onClick={handleSignInForm}>{isSignInAccess ? "Sign In" : "Sign Up"}</button>
                    {signinerror && <p className="text-red-600">{signinerror} </p> }
                    <h6 className="my-3 cursor-pointer" onClick={handleIsAccessForm}>
                        {isSignInAccess ? "New to nextflix? Please Sign Up now" : "Already have an account Plase Sign In"}
                    </h6>
            </form>
        </div>
    )
}
export default Login;