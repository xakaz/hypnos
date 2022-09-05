import React, { useEffect, useContext, useState } from 'react'
import axios from "axios"
import { UserContext } from '../../context/UserContext'
import { HotelContext } from '../../context/HotelContext'
import { useNavigate } from 'react-router-dom'
import CompteCreation from './compteCreation'
import { v4 as uuid_v4 } from "uuid"

export default function MonCompte() {
  const { currentUser } = useContext(UserContext)
  const [users, setUsers] = useState()
  const [booking, setBooking] = useState()
  const [suites, setSuites] = useState()
  const [hotels, setHotels] = useState()
  const [email, setEmail] = useState()
  const today = Date.parse(new Date())/1000
  const {setCurrentHotel, setCurrentSuite} = useContext(HotelContext);

  const navigate = useNavigate()

  useEffect(() => {
    axios.get(process.env.REACT_APP_AXIOS_URL+"/front/user")
      .then(response => { setUsers(response.data) })
      .catch(err => { console.error(err) })

    axios.get(process.env.REACT_APP_AXIOS_URL+"/back/getBooking")
      .then(response => { setBooking(response.data) })
      .catch(err => { console.error(err) })

    axios.get(process.env.REACT_APP_AXIOS_URL+"/front/suites")
      .then(response => { setSuites(response.data); })
      .catch(err => { console.error(err) })

    axios.get(process.env.REACT_APP_AXIOS_URL+"/front/hotels")
      .then(response => { setHotels(response.data); })
      .catch(err => { console.error(err) })

    axios.get(process.env.REACT_APP_AXIOS_URL+"/back/email")
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

  const handleImage = (suite_id, hotel_id) => {
    setCurrentSuite(suite_id)
    setCurrentHotel(hotel_id)
    navigate("/reservation")
  }

  const handleCancel = async (id) => {
    await axios.post(process.env.REACT_APP_AXIOS_URL+"/back/deleteBooking", id)
      .then(response => { console.log(response) })
      .catch(err => { console.error(err) })
    window.location.reload();
  }

  const replaceText = (text) => {
    return text.replace("&ocirc;", 'ô').replaceAll("&eacute;", "é").replaceAll("&agrave;", "à").replaceAll("&rsquo;", "'").replaceAll("&#039;", "'")
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
                      <h2 className='my-5 text-center'>Bienvenue dans votre espace personnel</h2>
                      <div className="col-12 col-xl-4 ">
                        <div className="border rounded mb-3 p-5" >
                          <h3 className='mb-3'>Utilisateur {user.user_id} </h3>
                          <hr />
                          <p>{user.user_prenom}</p>
                          <p>{user.user_nom}</p>
                          <p>{user.user_mail}</p>
                        </div>
                      </div>

                      <div className="col-12 col-xl-8">
                        {/********************************************************* RESERVATION EN COURS */}
                        <h3 className='text-primary'>RESERVATIONS EN COURS</h3>
                        <hr />
                        {
                          booking ? 
                          booking.map(book => {
                            return (
                              user.user_id === book.booking_user && today < book.booking_start &&
                              <div key={uuid_v4()} className="mb-5">
                                {
                                  suites && suites.map(suite => {
                                    return (
                                      suite.suite_id === book.booking_suite &&
                                      <div key={uuid_v4()}>
                                        {
                                          hotels && hotels.map(hotel => {
                                            return (
                                              hotel.hotel_id === suite.suite_hotel &&
                                              <div key={uuid_v4()}>
                                                <h5 className='mb-3 text-center bg-white text-dark border rounded p-2'>{(replaceText(hotel.hotel_name)).toUpperCase()} - Suite {replaceText(suite.suite_name)}</h5>
                                                <div>Réservation n° : {book.booking_id}</div>
                                                <hr />
                                                <div className='px-3'>
                                                  <div className="row mb-3">
                                                    <div className="col-12 col-lg-4 d-flex flex-column justify-content-center align-content-center  mb-3">
                                                      {console.log(today, book.booking_start)}
                                                      <img src={require(`../../assets/containersAssets/hotels/${hotel.hotel_ville}/${suite.suite_image}`)}
                                                        className="rounded"
                                                        alt={suite.suite_name}
                                                        height="150px"
                                                        width="266px"
                                                        onClick={()=>handleImage(suite.suite_id, hotel.hotel_id)}
                                                      />
                                                      {console.dir(book.booking_start)}
                                                    </div>
                                                    <div className="col-12 col-lg-8 d-flex flex-column justify-content-center align-content-center">
                                                      <p className=''>{replaceText(suite.suite_description)}</p>
                                                      <i className='opacity-50'>{replaceText(hotel.hotel_adresse)} -  {hotel.hotel_cp}  {replaceText(hotel.hotel_ville)}</i>
                                                    </div>
                                                  </div>
                                                  <div className="row">
                                                    <div className="col-6 d-flex flex-column justify-content-center align-items-start">
                                                      <p className='mb-1'>Réservation du : {new Date(book.booking_start*1000).toLocaleDateString()} au {new Date(book.booking_end*1000).toLocaleDateString()}</p>
                                                      <p className='mb-1'>Effectuée le : {new Date(book.booking_date*1000).toLocaleDateString()}</p>
                                                      {console.log(book.booking_start)}
                                                      <div>
                                                        A régler : {suite.suite_prix * ((book.booking_end - book.booking_start) / 86400)} € - {((book.booking_end - book.booking_start) / 86400)} nuits
                                                      </div>
                                                    </div>
                                                    <div className="col-6 d-flex justify-content-end align-items-center bbg-warning">
                                                      {
                                                        (book.booking_start - today > 259200) ?
                                                          <button className="btn btn-outline-danger" onClick={() => handleCancel(book.booking_id)}>Annuler</button>
                                                          :
                                                          <p className='text-warning'>Cette réservation ne peut plus être annulée</p>
                                                      }
                                                    </div>
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
                            )
                          })
                          :
                          <p className='text-center my-5 opacity-50'>Vous n'avez aucune réservation en cours...</p>
                        }
                        {/********************************************************* HISTORIQUE */}
                        <h3 className='text-primary mt-5 pt-5'>HISTORIQUE DES RESERVATIONS</h3>
                        <hr />
                        {
                          booking && booking.map(book => {
                            return (
                              user.user_id === book.booking_user && today > book.booking_start &&
                              <div key={uuid_v4()}>
                                {
                                  suites && suites.map(suite => {
                                    return (
                                      suite.suite_id === book.booking_suite &&
                                      <div key={uuid_v4()}>
                                        {
                                          hotels && hotels.map(hotel => {
                                            return (
                                              hotel.hotel_id === suite.suite_hotel &&
                                              <div key={uuid_v4()}>

                                                <div className='mb-5'>
                                                  <h5 className='mb-3 text-center bg-white text-dark border-rounded p-2 opacity-50'>{replaceText(hotel.hotel_name).toUpperCase()} - Suite {suite.suite_name}</h5>
                                                  <div>Réservation n° : {book.booking_id}</div>
                                                  <hr />
                                                  <div className="row">
                                                    <div className="col-4">
                                                      <img src={require(`../../assets/containersAssets/hotels/${hotel.hotel_ville}/${suite.suite_image}`)}
                                                        className="rounded"
                                                        alt={suite.suite_name}
                                                        height="150px"
                                                        width="266px"
                                                      />
                                                    </div>
                                                    <div className="col-8">
                                                      <p className='mb-3'>{replaceText(suite.suite_description)}</p>
                                                      <i className='opacity-50 mb-3'>{replaceText(hotel.hotel_adresse)} -  {hotel.hotel_cp}  {replaceText(hotel.hotel_ville)}</i>
                                                      <div className="row mt-3 d-flex justify-content-start">
                                                        <p className='mb-3'>Réservé du : {new Date(book.booking_start*1000).toLocaleDateString()} au {new Date(book.booking_end*1000).toLocaleDateString()}</p>
                                                      </div>
                                                      <div>
                                                        Prix payé : {suite.suite_prix * ((book.booking_end - book.booking_start) / 86400)} € pour {((book.booking_end - book.booking_start) / 86400)} nuits
                                                      </div>
                                                    </div>
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
