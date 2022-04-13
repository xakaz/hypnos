import React from 'react'
import axios from 'axios'

export default function MonCompte ()
{
  
    return (
      <>
      <div className="container text-white">
        <h1 className='my-5'>Mon compte</h1>
        <div className="row">
          <div className="col-12 col-xl-4 ">
            <div className="border border-secondary rounded p-5" style={{maxWidth:"300px"}}>
              <h3 className='mb-3'>Utilisateur</h3>
              <p>Prenom</p>
              <p>Nom</p>
              <p>Adresse email</p>
            </div>
          </div>
          <div className="col-12 col-xl-8">
            <h3>Réservation actuelle</h3>
            <div className="row">
              <div className="col-8">
                <div className='row'>
                  <div className="col-4">
                    <img src="" className="img-fluid" height={"50xp"} alt="suite" />
                  </div>
                  {/** */}
                  <div className="col-8">
                    <h5 className='mb-3'>Titre de la suite</h5>
                    <p>Réservé du 12/06/13 au 19/06/13</p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <button className="btn btn-outline-success mx-3">Modifier</button>
                <button className="btn btn-outline-danger">Supprimer</button>
              </div>
            </div>
            <hr />
            <h3 className='mb-3'>Historique des réservations</h3>
            <div className="row mb-3">
              <div className="col-8">
                <div className='row'>
                  <div className="col-4">
                    <img src="" className="img-fluid" height={"15xp"} alt="suite" />
                  </div>
                  {/** */}
                  <div className="col-8">
                    <h5>Titre de la suite</h5>
                    <p>Réservé du 12/06/13 au 19/06/13</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
       

      </div>
      </>
  )

}
