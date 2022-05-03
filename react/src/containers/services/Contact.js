import React from 'react'
import Formulaire from '../../components/Formulaire'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { v4 as uuid_v4 } from "uuid"

export default function Contact() {

  const [hotels, setHotels] = useState()

  useEffect(()=> {
    axios.get("https://hypnoshernandez.alwaysdata.net/front/hotels")
    .then(response => setHotels(response.data))
    .catch(err => console.error(err))
  },[])

  const handleMail = (message) => {
    axios.post('https://hypnoshernandez.alwaysdata.net/back/envoiMail', message)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="container text-white ">
      <div className="row d-flex align-items-center">

        {/* --------------------- CONTACT ----------------------- */}
        <div className="col-12 col-xl-6 my-5 p-4">
          <div className="row">
            <div className="col-12 col-xl-11">
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <h1>Contact</h1>
                <hr />
                <p>Vous pouvez nous joindre par téléphone :</p>
                <ul>
                  {
                    hotels && hotels.map(hotel => {
                      return(
                        <li key={uuid_v4()}>{hotel.hotel_ville} : {hotel.hotel_telephone}</li>
                      )
                    })
                  }
                  
                </ul>
                <hr />
                <p>ou à l'aide du formulaire ci-contre :</p>
              </div>
            </div>
            <div className="d-none d-xl-flex col-xl-1">
              <div className='h-100 border-end'></div>
            </div>
          </div>
        </div>
        {/* --------------------- FORMULAIRE ----------------------- */}
        <div className="col-12 col-xl-6">
          <Formulaire sendMail={handleMail} />
        </div>
      </div>
    </div>
  )
}
