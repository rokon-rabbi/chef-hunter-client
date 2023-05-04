import React, { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect } from 'react';
import { useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // const signInWithGoogle = () => {
    //     setLoading(true);
    //     return signInWithPopup(auth, GoogleAuthProvider)
    // }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // const updateUser = (user, name,photo) => {
    //     setLoading(true);
    //     return updateProfile(user, name, photo);
    // }
    
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside auth state observer', loggedUser)

            setUser(loggedUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        // signInWithGoogle
        // updateUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;