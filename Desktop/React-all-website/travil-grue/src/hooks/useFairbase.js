import { GoogleAuthProvider, getAuth, signInWithPopup,signOut,onAuthStateChanged   } from "firebase/auth";
import { useState } from "react";
import initFairBase from "../Fairbase/fairbase.init";


initFairBase();
const useFairbase = () => {
    const [user, setUser] = useState({});
    const [loding,setLoding] = useState(true);


   
    const auth = getAuth();


    //googel sign in 
    const googleSignIn = () => {
        setLoding(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
           
    }

    //observer
    onAuthStateChanged(auth,user =>{
        if(user){
            setUser(user)
        }
        setLoding(false)
    })

    //SignOut
    const signOutUser = ()=>{
        setLoding(true)
        signOut(auth)
        .then(result =>{
            console.log("logout successfull")
            setUser({})
        })
        .catch(error =>{
            console.log(error.message)
        })
        .finally(()=>setLoding(false))
    }


    return {googleSignIn,user,signOutUser,loding}


}


export default useFairbase;


