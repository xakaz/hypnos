import React, { useRef, useState, useEffect, useContext } from "react";
import axios from "axios"
import { NavLink } from 'react-router-dom'

export default function AjouterSuite() {

  ///////////// CONSTANTES
  const [validation, setValidation] = useState('')
  const [successMessage, SetSuccessMessage] = useState(false)
  const [count, setCount] = useState(0);
  const inputs = useRef([])
  const formRef = useRef()

  ///////////// RECUPERATION DES INPUTS
  const addInputs = element => {
    if (element && !inputs.current.includes(element)) {
      inputs.current.push(element)
    }
  }

  ////////////////////////////////////// SOUMISSION DU FORMULAIRE
  const handleSubmit = (e) => {
    e.preventDefault()
    /////////////////// LONGUEUR PASSWORD
    const data = {
      prenom: inputs.current[0].value,
      nom: inputs.current[1].value,
      email: inputs.current[2].value,
      password: inputs.current[3].value
    }
    setValidation("")
    formRef.current.reset()
    // axios.post('http://localhost/server/back/inscription', data)
  }

  return (
    <>
      <div className="container">
        {/** FORMULAIRE */}
        <div className="text-light">

          <form className="" onSubmit={handleSubmit} ref={formRef}>
            <h4 className="my-3">AJOUTER UNE SUITE</h4>

            {/** NOM */}
            <div className="mb-3" >
              <label htmlFor="nomSuite" className="form-label">Nom de la suite</label>
              <input type="text" className="form-control" id="nomSuite" name="nomSuite" ref={addInputs} />
            </div>
            {/** PRIX */}
            <div className="mb-3" >
              <label htmlFor="prixSuite" className="form-label">Prix de la suite (nuitée)</label>
              <input type="text" className="form-control" id="prixSuite" name="prixSuite" ref={addInputs} />
            </div>
            {/** DESCRIPTION */}
            <div className="mb-3" >
              <label htmlFor="descriptionSuite" className="form-label">Description de la suite</label>
              <textarea className="form-control" name="descriptionSuite" id="descriptionSuite" cols="30" rows="10" ref={addInputs}></textarea>
            </div>
            <div className="row">
              <div className="col-11">
                <div className="form-group mb-3">
                  <label htmlFor="imageSuite" className="d-block mb-1">Photo de la suite</label>
                  <input type="file" className="form-control-file" id="imageSuite" />
                </div>
              </div>
            </div>






            {/** BOUTON */}
            <button type="submit" className="btn btn-outline-light">Ajouter</button>
          </form>
        </div>
      </div>
    </>
  );
}