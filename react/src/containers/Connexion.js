import React, { useRef, useState, useContext } from "react";
import { connexionContext } from '../context/connexionContext';
import { NavLink } from "react-router-dom";

import axios from "axios"

export default function Connexion() {
  
  // const {connected} = useContext(connexionContext)

  const inputs = useRef([])

  const addInputs  = element => {
    if(element && !inputs.current.includes(element)){
      inputs.current.push(element)
    }
  }  
    
  //   const handleSubmit = (e) => {
  //     e.preventDefault()
  //     //Inscription


  //   }
  //   // axios.post('http://localhost/server/back/connexion', this.state)
  //   //   .then(response => {
  //   //     document.location.href = "http://localhost:3000/mon-compte";
  //   //     connected();
  //   //     <NavLink to="/mon-compte"/>
  //   //   })
  //   //   .catch(error => {
  //   //     this.setState({ errorText: "Email ou mot de passe incorrect" })
  //   //   })

  return (
    <>
      <div className="container d-flex justify-content-center">

        {/** FORMULAIRE */}
        <div className="my-5 text-light w-50">
          <form className="p-4">
            <h4 className="text-center border-bottom border-top p-2 mb-3">CONNEXION</h4>
            {/** MAIL */}
            <div className="mb-3 ">
              <label htmlFor="email" className="form-label">Adresse mail</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                ref={addInputs}
              />
            </div>

            {/** ¨PASSWORD */}
            <div className="mb-3 ">
              <label htmlFor="password" className="form-label">Mot de passe</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                ref={addInputs}
              />
            </div>
            <div className="text-danger mb-3">texte erreur</div>

            {/** BOUTON */}
            <button type="submit" className="btn btn-outline-light">Se connecter</button>
          </form>
        </div>

      </div>
    </>
  );
}

