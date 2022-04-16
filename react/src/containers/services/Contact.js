import React from 'react'
import Formulaire from '../../components/Formulaire'
import axios from 'axios'

export default function Contact() {

  const handleMail= (message) => {
    axios.post('http://localhost/server/back/envoiMail', message)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div className="container text-white ">
      <div className="row">

        {/* --------------------- CONTACT ----------------------- */}
        <div className="col-12 col-xl-6 my-5 p-4">
          <div className='d-flex flex-column justify-content-center align-items-center border-end'>

            <h1>Contact</h1>
            <hr />
            <p>Pour nous contacter vous pouvez nous joindre</p>
            <p>par téléphone</p>
            <ul>
              <li>Paris : 01.02.03.04.05</li>
              <li>Bordeaux : 01.02.03.04.05</li>
              <li>Marseille : 04.02.03.04.05</li>
              <li>Champillon : 01.02.03.04.05</li>
              <li>Lyon : 01.02.03.04.05</li>
              <li>Toulouse : 05.02.03.04.05</li>
              <li>Le Conquet : 01.02.03.04.05</li>
            </ul>
            <hr />
            <p>ou à l'aide du formulaire ci-contre :</p>
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
