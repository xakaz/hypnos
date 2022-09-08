import axios from 'axios'
import React, { useState, useContext, useRef } from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

export default function CompteCreation() {

  const { currentUser } = useContext(UserContext)

  const [validation, setValidation] = useState("")
  const navigate = useNavigate()

  const inputs = useRef([])

  const addInputs = el => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el)
    }
  }

  const formRef = useRef()

  const handleForm = async (e) => {
    e.preventDefault()
    await axios.post(process.env.REACT_APP_AXIOS_URL+"/back/inscription", {
      email: inputs.current[0].value,
      prenom: inputs.current[1].value,
      nom: inputs.current[2].value,
    })
      .catch(err => {
        console.error(err)
      })

    formRef.current.reset()
    setValidation("")
    window.location.reload()
    navigate("/mon-compte")
  }

  return (
    <>
      <div className='container'>
        <h2 className='mt-5 mb-2'>Création du compte</h2>
        <p className=' mb-3'>Veuillez créer votre compte pour accéder à votre profil et réserver une suite chez Hypnos</p>
        <form className="creationCompte" onSubmit={handleForm} ref={formRef}>
          <div className="mb-3">
            <label htmlFor="email" className='form-label'>Adresse mail</label>
            <input name="email" type="email" className="form-control" id="email" ref={addInputs} disabled value={currentUser.email} />
          </div>
          <div className="mb-3">
            <label htmlFor="prenom" className='form-label'>Prénom</label>
            <input name="prenom" type="text" className="form-control" required id="prenom" ref={addInputs} />
          </div>
          <div className="mb-3">
            <label htmlFor="nom" className='form-label'>Nom</label>
            <input name="nom" type="text" className="form-control" required id="nom" ref={addInputs} />
            <p className="text-danger mt-1">{validation}</p>
          </div>
          <button className="btn btn-primary" >Créer le compte</button>
        </form>
      </div>
    </>
  )
}
