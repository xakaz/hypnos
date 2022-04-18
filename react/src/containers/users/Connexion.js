import React, { useContext, useRef, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

export default function Connexion() {

  const { modalState, toggleModals, connexion } = useContext(UserContext)

  const navigate = useNavigate();

  const inputs = useRef([])

  const addInputs = el => {
    if (el && !inputs.current.includes(el)){
      inputs.current.push(el)
    }
  }

  const formRef = useRef()

  const [validation, setValidation] = useState("")

  const handleForm = async (e) =>  {
    e.preventDefault()
    
    try {
      const cred = await connexion(
        inputs.current[0].value,inputs.current[1].value 
      )
      formRef.current.reset()
      setValidation("")
      // console.log(cred)
      navigate("/mon-compte")
      toggleModals("close")
    } catch {
     setValidation('Email ou mot de passe incorrect')
    }
  }

  const closeModal = () => {
    setValidation("")
    toggleModals("close")
  }



  return (
    <>
      {
        modalState.Connexion &&
        <div className="position-fixed top-0 vw-100 vh-100" style={{ zIndex: "1" }}>
          <div className="w-100 h-100 bg-dark bg-opacity-75" onClick={closeModal}></div>
          <div className="position-absolute top-50 start-50 translate-middle" style={{ minWidth: "400px" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Inscription</h5>
                  <button className="btn-close" onClick={closeModal}></button>
                </div>
                <div className="modal-body">
                  <form className="sign-in-form" onSubmit={handleForm} ref={formRef}>
                    <div className="mb-3">
                      <label htmlFor="signInEmail" className='form-label'>Adresse mail</label>
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        required
                        id="signInEmail"
                        ref={addInputs}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="pwd" className='form-label'>Mot de passe</label>
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        required
                        id="pwd"
                        ref={addInputs}
                      />
                      <p className="text-danger mt-1">{validation}</p>
                    </div>
                  
              
                    <button className="btn btn-primary">Se connecter</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}
