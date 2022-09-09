import React from 'react'

const Content = (props) => {
  return (
    <div className='my-5 container '>
      <div className="row text-white">
        <div className="col-6 d-flex justify-content-end ">
          <img src={props.vignette}
            alt={props.vignette_nom}
            style={{ width: "300px" }}
            className="rounded img-fluid content-container" />
        </div>
        <div className="col-6 d-flex align-items-center">
          <div className="row w-50">
            <h5>{props.title}</h5>
            <hr></hr>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content