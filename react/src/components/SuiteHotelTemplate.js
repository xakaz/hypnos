import React from 'react'

export default function SuiteHotelTemplate(props) {
  return (
    <>
      <div className="card text-dark m-3" style={{ width: "35rem" }}>
        <img className="card-img-top" src={props.image} alt={props.nom} />
        <div className="card-body">

          <h5 className="card-title">{props.nom}</h5>
          <hr />

          <div className="row">
            <div className="col-8 d-flex justify-content-start align-items-center">
              <p className="card-text">{props.description}</p>
            </div>

            <div className="col-4 d-flex justify-content-end align-items-center">
              <div>
                <div>{props.boutonReservation}</div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}
