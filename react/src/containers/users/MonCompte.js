import React, { useEffect, useContext, useState } from 'react'
import axios from "axios"
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
import CompteCreation from './compteCreation'
import { v4 as uuid_v4 } from "uuid"

export default function MonCompte() {
  const { currentUser } = useContext(UserContext)
  const [users, setUsers] = useState()
  const [booking, setBooking] = useState()
  const [suites, setSuites] = useState()
  const [email, setEmail] = useState()
  const today = new Date().getTime()

  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost/server/front/user")
      .then(response => { setUsers(response.data) })
      .catch(err => { console.error(err) })

    axios.get("http://localhost/server/back/getBooking")
      .then(response => { setBooking(response.data) })
      .catch(err => { console.error(err) })

    axios.get("http://localhost/server/front/suites")
      .then(response => { setSuites(response.data); })
      .catch(err => { console.error(err) })

    axios.get("http://localhost/server/back/email")
      .then(response => {
        response.data.map(mailUser => {
          return (
            mailUser.user_mail === currentUser.email &&
            setEmail(mailUser.user_mail)
          )
        })
      })
      .catch(err => { console.error(err) })
  }, [])

  const handleCancel = async (id) => {
    await axios.post("http://localhost/server/back/deleteBooking", id)
      .then(response => { console.log(response) })
      .catch(err => { console.error(err) })
    window.location.reload();
  }

  const replaceText = (text) => {
    return text.replace("&ocirc;", 'ô').replaceAll("&eacute;", "é").replaceAll("&agrave;", "à").replaceAll("&rsquo;", "'").replaceAll("&#039;", "'")
  }
  return (
    <>
      {
        currentUser ?
          <div className="container text-white">
            {
              email === currentUser.email ?
                users.map(user => {
                  return (
                    user.user_mail === currentUser.email &&
                    <div key={uuid_v4()} className="row">
                      {/******************************************************** IDENTITE UTILISATEUR */}
                      <h1 className='my-5'>Mon compte</h1>
                      <div className="col-12 col-xl-4 ">
                        <div className="border rounded mb-3 p-5" >
                          <h3 className='mb-3'>Utilisateur - {user.user_id} </h3>
                          <hr />
                          <p>{user.user_prenom}</p>
                          <p>{user.user_nom}</p>
                          <p>{user.user_mail}</p>
                        </div>
                      </div>

                      <div className="col-12 col-xl-8">
                        {/********************************************************* RESERVATION EN COURS */}
                        <h3 className='text-primary'>RESERVATION EN COURS</h3>
                        <hr />
                        {
                          booking && booking.map(book => {
                            return (
                              user.user_id === book.booking_user &&
                              today < book.booking_start &&
                              <div key={uuid_v4()} className="mb-5">
                                {
                                  suites && suites.map(suite => {
                                    return (
                                      suite.suite_id === book.booking_suite &&
                                      <div key={uuid_v4()}>
                                        <h5 className='mb-3 text-center'>- {suite.suite_name} -</h5>
                                        <p className='mb-3'>{replaceText(suite.suite_description)}</p>
                                        <p className='mb-3'>{suite.suite_prix} € / nuit</p>
                                        <div className="row">
                                          <div className="col-9 d-flex flex-column justify-content-center align-items-start">
                                            <p className='mb-3'>Réservé du : {new Date(book.booking_start).toLocaleDateString()} au {new Date(book.booking_end).toLocaleDateString()}</p>
                                            <div>
                                              Prix total : {suite.suite_prix * ((book.booking_end - book.booking_start) / 86400000)} € pour {((book.booking_end - book.booking_start) / 86400000)} nuits
                                            </div>
                                          </div>
                                          <div className="col-3 d-flex justify-content-end align-items-center bbg-warning">
                                            {
                                              (book.booking_start - today > 259200000) &&
                                              <button className="btn btn-outline-danger" onClick={() => handleCancel(book.booking_id)}>Annuler</button>
                                            }
                                          </div>
                                        </div>
                                      </div>
                                    )
                                  })
                                }
                              </div>
                            )
                          })
                        }
                        {/********************************************************* HISTORIQUE */}
                        <h3 className='text-primary mt-5 pt-5'>HISTORIQUE DES RESERVATIONS</h3>
                        {
                          booking && booking.map(book => {
                            return (
                              user.user_id === book.booking_user &&
                              today > book.booking_start &&
                              <div key={uuid_v4()}>
                                {
                                  suites && suites.map(suite => {
                                    return (
                                      suite.suite_id === book.booking_suite &&
                                      <div key={uuid_v4()}>
                                        <div>
                                          <hr />
                                          <h5 className='mb-3 text-center'>- {suite.suite_name} -</h5>
                                          <p className='mb-3'>{replaceText(suite.suite_description)}</p>
                                          <p className='mb-3'>{suite.suite_prix} € / nuit</p>
                                          <div className="row d-flex justify-content-start">
                                            <p className='mb-3'>Réservé du : {new Date(book.booking_start).toLocaleDateString()} au {new Date(book.booking_end).toLocaleDateString()}</p>
                                          </div>
                                          <div>
                                            Prix total : {suite.suite_prix * ((book.booking_end - book.booking_start) / 86400000)} € pour {((book.booking_end - book.booking_start) / 86400000)} nuits
                                          </div>
                                        </div>
                                      </div>
                                    )
                                  })
                                }
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  )
                })
                :
                <CompteCreation />
            }

          </div>
          :
          navigate("/")
      }
    </>
  )
}
