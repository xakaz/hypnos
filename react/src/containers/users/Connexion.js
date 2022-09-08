import React, { useContext, useRef, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'


export default function Connexion() {

  const { modalState, toggleModals, connexion } = useContext(UserContext)
  const inputs = useRef([])
  const formRef = useRef()
  const navigate = useNavigate();
  const [validation, setValidation] = useState("")

  const addInputs = el => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el)
    }
  }

  const handleForm = async (e) => {
    e.preventDefault()
    try {
      await connexion(inputs.current[0].value, inputs.current[1].value)
      formRef.current.reset()
      setValidation("")
      navigate("/mon-compte")
      toggleModals("close")
    } catch {
      document.querySelector('form').reset();
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
        <div className="position-fixed top-0 vw-100 vh-100" style={{ zIndex: "100" }}>
          <div className="w-100 h-100" onClick={closeModal} style={{ background: 'rgba(0,0,0,0.7)' }}></div>
          <div className="position-absolute top-50 start-50 translate-middle" style={{ minWidth: "400px" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Connexion</h5>
                  <button className="btn-close" onClick={closeModal}></button>
                </div>
                <div className="modal-body">
                  <form className="sign-in-form" onSubmit={handleForm} ref={formRef}>

                    < div className="mb-3">
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

                    <div className='row'>
                      <div className="col-6">
                        <button className="btn btn-primary">Se connecter</button>
                      </div>
                      <div className="col-6 d-flex align-items-center">
                        <button className="btn text-primary" onClick={() => toggleModals('inscription')} >S'inscrire ?</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div >

      }
    </>
  )
}
