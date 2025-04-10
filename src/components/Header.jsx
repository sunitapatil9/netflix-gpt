import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { addUser , removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";
import { addGptSearchPage } from "../utils/GptSlice";


const Header = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

  const handleGptSearchButtonClick = () =>{
      dispatch(addGptSearchPage());
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // user sign in or sign up
              const {uid, email,displayName, photoURL } = user;
              dispatch(addUser({uid : uid, email : email , displayName : displayName, photoURL : photoURL}));
              navigate("/browse")
            } else {
              // User is signed out
            dispatch(removeUser());
            navigate("/")
            }
          });

          //this is to unmount the onAuthStateChanged
          return ()=>{unsubscribe()}
    }, [])

    const handleSignOut = () =>{
        signOut(auth).then(() => {
          }).catch((error) => {
            // An error happened.
          });
    }
    // console.log(user)
    return(
        <div className="absolute flex justify-between w-full bg-gradient-to-b from-black z-10">
                <img className="lex-1 flex items-center max-w-30  h-15 md:max-w-40 " src={LOGO_URL}
                alt="logo" />
            {user && <div className="m-4 flex">
                <button className="px-2 py-2 md:px-4 md:py-1 flex bg-white text-black text-[12px] md:text-[16px] rounded-xl cursor-pointer"
                 onClick={handleGptSearchButtonClick}>GPT Search</button>
                <p className="mx-2 my-2">{user?.displayName}</p>
                {/* <img src={user?.photoURL} /> */}
                <button className="px-2 py-2 md:px-4 md:py-1 flex-1 flex bg-white text-black rounded-xl text-[12px] md:text-[16px] cursor-pointer" onClick={handleSignOut}>Sign out</button>
            </div>}
        </div>
    )
}
export  default Header;