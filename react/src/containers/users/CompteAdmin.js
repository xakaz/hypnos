import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {connexionContext } from "../../context/connexionContext"
import { useContext } from 'react';
import {NavLink} from 'react-router-dom'
import { v4 as uuid_v4 } from "uuid"

export default function CompteAdmin() {

  const [hotels, setHotels] = useState();
  const {role} = useContext(connexionContext);

  useEffect(() => {
    axios.get(process.env.REACT_APP_URL + "server/front/hotels")
      .then(response => {
        setHotels(response.data);
      })
  }, [])

  return (
    role === 1 ?
    <div className='container text-white'>
      <h1 className="text-center my-5">Page d'administration</h1>

      <div className="col-12 col-md-6">
        <h3>Etablissements</h3>
        <table class="table table-striped table-light">
          <thead className=''>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Nom</th>
              <th scope="col">ville</th>
              <th colspan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              hotels && hotels.map(hotel => {
                return (
                  <>
                    <tr key={uuid_v4()}>
                      <th scope="row">{hotel.hotel_id}</th>
                      <td>{hotel.hotel_name}</td>
                      <td>{hotel.hotel_ville}</td>
                      <td>  <button className="btn btn-success">Modifier</button> </td>
                      <td>  <button className="btn btn-danger">Supprimer</button> </td>
          
                    </tr>
                  </>
                )
              })
            }
          </tbody>
        </table>
      </div>


      <div className="col-12 col-md-6">
        <h3>Gérants</h3>
        <table class="table table-striped table-light">
          <thead className=''>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Nom</th>
              <th scope="col">prenom</th>
              <th colspan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              hotels && hotels.map(hotel => {
                return (
                  <>
                    <tr key={uuid_v4()}>
                      <th scope="row">{hotel.hotel_id}</th>
                      <td>Jean-Louis</td>
                      <td>Aubert</td>
                      <td>  <button className="btn btn-success">Modifier</button> </td>
                      <td>  <button className="btn btn-danger">Supprimer</button> </td>
          
                    </tr>
                  </>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
    : 
    <div>
      <h1 className='text-center text-white my-5'>Vous n'avez pas le droit d'être ici !</h1> 
      <NavLink to="/" className="btn btn-primary">Retour à l'accueil</NavLink>

    </div>
  )
}
