import React, { useRef, useState, useEffect, useContext } from "react";
import axios from "axios"
import { NavLink } from 'react-router-dom'

export default function Inscription() {

  ///////////// CONSTANTES
  const [validation, setValidation] = useState('')
  const [successMessage, SetSuccessMessage] = useState(false)
  const [mails, setMails] = useState([]);
  const inputs = useRef([])
  const formRef = useRef()

  ///////////// RECUPERATION DES INPUTS
  const addInputs = element => {
    if (element && !inputs.current.includes(element)) {
      inputs.current.push(element)
    }
  }

  //////////////////RECUPERATION DES EMAILS
  useEffect(() => {
    axios.get("http://localhost/server/back/email")
      .then(response => {
        setMails(response.data.map(mail => { return (mail.user_mail) }))
      })
  }, [])
  console.log(mails)
  ////////////////////////////////////// SOUMISSION DU FORMULAIRE
  const handleSubmit = (e) => {
    e.preventDefault()
    /////////////////// LONGUEUR PASSWORD
    if ((inputs.current[3].value.length || inputs.current[4].value.length) < 8) {
      setValidation("8 caractères minimum !")
      return;
    }
    if ((inputs.current[3].value.length || inputs.current[4].value.length) > 20) {
      setValidation("20 caractères maximum !")
      return;
    }
    ////////////////// PASSORD MATCH
    else if ((inputs.current[3].value !== inputs.current[4].value)) {
      setValidation("Les mots de passe sont différents")
      return;
    }

    ////////////////VERIF EMAIL
    if (mails.includes(inputs.current[2].value)) {
      setValidation('L\'adresse mail existe déjà')
    } else {
      const data = {
        prenom: inputs.current[0].value,
        nom: inputs.current[1].value,
        email: inputs.current[2].value,
        password: inputs.current[3].value
      }
      SetSuccessMessage(true)
      setValidation("")
      formRef.current.reset()
      // axios.post('http://localhost/server/back/inscription', data)
      console.log("inscription validée")
    }
  }


  return (
    <>
      <div className="container d-flex justify-content-center">
        {/** FORMULAIRE */}
        <div className="my-5 text-light w-50">
          {
            successMessage === true && <h1 className="text-success text-center">Inscription réussie !</h1>
          }
          <form className="p-4" onSubmit={handleSubmit} ref={formRef}>
            <h4 className="text-center border-bottom border-top p-2 mb-3">FORMULAIRE D'INSCRIPTION'</h4>
            <div className="row mb-3">
              {/** PRENOM */}
              <div className="col-12 col-xl-6">
                <label htmlFor="prenom" className="form-label">Prénom</label>
                <input
                  type="text"
                  className="form-control"
                  id="prenom"
                  name="prenom"
                  ref={addInputs}
                />
              </div>

              {/** NOM */}
              <div className="col-12 col-xl-6">
                <label htmlFor="nom" className="form-label">Nom</label>
                <input
                  type="text"
                  className="form-control"
                  id="nom"
                  name="nom"
                  ref={addInputs}
                />
              </div>
            </div>

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

            {/** ¨VERIFICATION PASSWORD */}
            <div className="mb-3 ">
              <label htmlFor="password" className="form-label">Confirmez le mot de passe</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                ref={addInputs}
              />
            </div>
            <p className="text-danger">{validation}</p>

            {/** BOUTON */}
            <button type="submit" className="btn btn-outline-light">S'inscrire</button>
          </form>
        </div>
      </div>
    </>
  );
}