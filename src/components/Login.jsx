import { useState } from "react";
import Header from "./Header";

const Login = () =>{

    const [isSignInAccess, setIsSignInAccess] = useState(true);

    const handleSignInForm = () =>{
        setIsSignInAccess(!isSignInAccess);
    }
    return(
        <div>
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web_tall_panel/IN-en-20250324-TRIFECTA-perspective_69cb00d3-7b5e-45e8-b378-7757f9c8f60b_large.jpg"
                alt="background image"/>
            </div>
            <form className="bg-black opacity-85 text-white absolute w-3/12  right-0 left-0 my-35 mx-130 p-6 m-6">
                    <h1 className=" font-bold py-4 text-2xl">{isSignInAccess ? "Sign In" : "Sign Up"}</h1>
                    { !isSignInAccess &&<input type="text" className="p-2 my-3 w-full bg-gray-700 " placeholder="Enter your name" /> }
                    <input type="text" className="p-2 my-3 w-full bg-gray-700 " placeholder="Email or mobile number" />
                    <input type="password" className="p-2 my-3 w-full bg-gray-800"  placeholder="Password" />
                    <button type="submit" className="w-full p-2 my-3 bg-red-600">{isSignInAccess ? "Sign In" : "Sign Up"}</button>
                    <h6 className="my-3 cursor-pointer" onClick={handleSignInForm}>{isSignInAccess ? "New to nextflix? Please Sign Up now" : "Already have an account Plase Sign In"}</h6>
            </form>
        </div>
    )
}
export default Login;