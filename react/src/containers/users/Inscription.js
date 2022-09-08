import React, { useContext, useRef, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

export default function Inscription() {

  const { modalState, toggleModals, inscription } = useContext(UserContext)

  const navigate = useNavigate();

  const inputs = useRef([])

  const addInputs = el => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el)
    }
  }
  const formRef = useRef()
  const [validation, setValidation] = useState("")

  const handleForm = async (e) => {
    e.preventDefault()
    if (inputs.current[1].value.length < 6) {
      setValidation("6 caractères minimum")
      return
    }
    if(!inputs.current[1].value.match(/[0-9]/g)){
      setValidation("1 chiffre minimum")
      return
    }
    if(!inputs.current[1].value.match(/[A-Z]/g)){
      setValidation("1 majuscule minimum")
      return
    }
    if(!inputs.current[1].value.match(/\W+/g)){
      setValidation("1 caractère spécial minimum")
      return
    }
    if (inputs.current[1].value !== inputs.current[2].value) {
      setValidation("Les mots de passes sont différents")
      return
    }
    try {
      await inscription(
        inputs.current[0].value, inputs.current[1].value
      )
      formRef.current.reset()
      setValidation("")
      navigate("/mon-compte")
      toggleModals("close")
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setValidation("Format de l'email non-valide")
      }
      if (error.code === "auth/email-already-in-use") {
        setValidation("Cet email est déjà inscrit")
      }
    }
  }

  const closeModal = () => {
    setValidation("")
    toggleModals("close")
  }



  return (
    <>
      {
        modalState.Inscription &&
        <div className="position-fixed top-0 vw-100 vh-100" style={{ zIndex: "100" }}>
          <div className="w-100 h-100" onClick={closeModal} style={{background :'rgba(0,0,0,0.7)'}}></div>
          <div className="position-absolute top-50 start-50 translate-middle" style={{ minWidth: "400px" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Inscription</h5>
                  <button className="btn-close" onClick={closeModal}></button>
                </div>
                <div className="modal-body">
                  <form className="sign-up-form" onSubmit={handleForm} ref={formRef}>
                    <div className="mb-3">
                      <label htmlFor="signUpEmail" className='form-label'>Adresse mail</label>
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        required
                        id="signUpEmail"
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
                    </div>
                    <div className="mb-3">
                      <label htmlFor="confirmPwd" className='form-label'>Confirmation du mot de passe</label>
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        required
                        id="confirmPwd"
                        ref={addInputs}
                      />
                      <p className="text-danger mt-1">{validation}</p>
                    </div>
                    <div className='row'>
                      <div className="col-6">
                        <button className="btn btn-primary ">S'inscrire</button>
                      </div>
                      <div className="col-6 d-flex align-items-center">
                        <button className="btn text-primary" onClick={() => toggleModals('connexion')} >Déjà inscrit ?</button>
                      </div>
                    </div>
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
