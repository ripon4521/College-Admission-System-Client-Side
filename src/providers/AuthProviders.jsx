import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";


// import { axiosPublic } from "../Hooks/useAxiosPublic";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setloading]=useState(true);
    const provider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const signInWithFacebook =() => {
        setloading(true)
       
        return signInWithPopup(auth,facebookProvider)


    }

    const passwordReset = (auth, email) => {
        setloading(true)
       return sendPasswordResetEmail(auth, email);
    }

    const createUser =(email,password)=>{
        setloading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const sighnIn = (email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogin = ()=>{
        setloading(true)
        return signInWithPopup(auth ,provider)
     }
     const logout = ()=>{
        setloading(true)
        return signOut(auth)
    }
    const updateuserProfile = (name )=>{
        setloading(true)
     return   updateProfile(auth.currentUser, {
            displayName: name,
        })
    }

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentuser =>{
        setUser(currentuser)
       setloading(false)
    })
    return()=>{
         unsubscribe()
    } 
},[])
console.log(user);

const userInfo = {
    user,
    loading,
    googleLogin,
    passwordReset,
    logout,
    createUser,
    sighnIn,
    updateuserProfile,
    signInWithFacebook
}


    return (
        <AuthContext.Provider value={userInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;