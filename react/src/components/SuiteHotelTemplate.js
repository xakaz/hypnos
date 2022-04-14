import React from 'react'

export default function SuiteHotelTemplate(props) {
  return (
    <>
      <div className="card text-dark m-3" style={{ width: "35rem" }}>
        <img className="card-img-top" src={props.image} alt={props.nom} />
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <h5 className="card-title">{props.nom}</h5>
              <hr />
              <p className="card-text">{props.description}</p>
              <p className="card-text">{props.prix}  € / nuit</p>
              <div className='d-flex justify-content-end'>

              <a href="/" className="btn btn-outline-success">Réserver la suite</a>
              </div>
            </div>
            <div className="col-6 bg-danger">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
