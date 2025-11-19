import React, { useEffect, useState } from 'react'
import { Contextapi } from './Authcontext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../Firebase/assignment-09auth'

const gauthprovider = new GoogleAuthProvider()
const Authprovider = ({ children }) => {
    const [loader, setloader] = useState(true)
    const [forgetemail, setforgetemail] = useState()
    const registerman = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signwithg = () => {
        return signInWithPopup(auth, gauthprovider)
    }
    const manualsignin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signoutman = () => {
        return signOut(auth)
    }
    const forgetpemail =(email)=>{
        setforgetemail(email)
    }
    const [user, setuser] = useState()
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            console.log(currentuser)
            setuser(currentuser)
            setloader(false)
        })
        return () => unsubscribe
    }, [])
    const info = {
        forgetemail,
        forgetpemail,
        user,
        loader,
        registerman,
        signwithg,
        manualsignin,
        signoutman,
    }
    return (
        <Contextapi value={info}>
            {children}
        </Contextapi>
    )
}

export default Authprovider