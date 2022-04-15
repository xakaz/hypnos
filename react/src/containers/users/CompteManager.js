import React from "react";
import Card from "../../components/Card"
import { NavLink } from "react-router-dom";

export default function Manager() {
  return (
    <>
      <div className="container text-light">
        <div className="row">

          {/************* PROFIL */}
          <div className="col-12 col-xl-4 my-5">
            <h3>Gérant de l'établissement</h3>
            <hr />
            <p>Prénom</p>
            <p>Nom</p>
            <p>Email</p>
          </div>

          {/************ HOTEL */}
          <div className="col-12 col-xl-8 my-5">
            {/* MON HOTEL */}
            <h3>Nom de l'hotel</h3>
            <div className="row">
              <img src="" alt="" className="img-fluid" />
              <div>
                <p>Nom de l'hotel</p>
                <p>Adresse de l'hotel</p>
                <p>Téléphone de l'hotel</p>
              </div>
            </div>
            <hr />
            {/* MES SUITES */}
            <div className="row">
              <div className="col-6">
                <h3>Suites de l'hôtel</h3>
              </div>
              <div className="col-6">
                <NavLink to="/ajouter-suite" className="btn btn-outline-success">Ajouter une suite</NavLink>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Card />
              </div>
              <div className="col">
                <Card />
              </div>
              <div className="col">
                <Card />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}