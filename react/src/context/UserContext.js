import React, { useState, createContext, useEffect } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import {auth} from '../firebase-config'

export const UserContext = createContext()
export function UserContextProvider(props) {

const [ currentUser, setCurrentUser ] = useState()
const [ loadingData, setLoadingData ] = useState(true)

const inscription = (email, password) => createUserWithEmailAndPassword(auth, email, password)
const connexion = (email, password) => signInWithEmailAndPassword(auth, email, password)

useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setCurrentUser(currentUser)
    setLoadingData(false)
  })

  return unsubscribe;
},[])


/////////////////// MODALS INSCRIPTION / CONNEXION
const [modalState, setModalState] = useState({
  Inscription : false,
  Connexion : false
})

const toggleModals = modal => {
  if(modal === "inscription"){
    setModalState({
      Inscription : true,
      Connexion : false
    })
  }
  if(modal === "connexion"){
    setModalState({
      Inscription : false,
      Connexion : true
    })
  }
  if(modal === "close"){
    setModalState({
      Inscription : false,
      Connexion : false
    })
  }
}

 return (
   <UserContext.Provider value ={{modalState, toggleModals, inscription, connexion, currentUser}}>
     {!loadingData && props.children}
   </UserContext.Provider>
 ) 
}