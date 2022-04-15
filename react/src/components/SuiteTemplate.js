import React, { useState, useEffect } from 'react'
import Slider from './slider'
import axios from 'axios'
import { v4 as uuid_v4 } from "uuid"
import DatePicker, { registerLocale } from "react-datepicker";
import fr from 'date-fns/locale/fr/';
import "react-datepicker/dist/react-datepicker.css";
registerLocale('fr', fr)


export default function SuiteTemplate(props) {

  const [suites, setSuites] = useState();
  const [services, setServices] = useState();
  const [images, setImages] = useState();


  // CALENDRIER
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };


  //APPEL API SUITE
  useEffect(() => {
    axios.get("http://localhost/server/front/suites")
      .then(response => {
        setSuites(response.data);
      })

  }, [])

  //APPEL API IMAGES
  useEffect(() => {
    axios.get("http://localhost/server/front/images")
      .then(response => {
        setImages(response.data);
      })

  }, [])

  //APPEL API SERVICES
  useEffect(() => {
    axios.get("http://localhost/server/front/services")
      .then(response => {
        setServices(response.data);
      })

  }, [])


  const handleValidation = () => {
    console.log("réservé")
  }

  return (
    suites && suites.map(suite => {
      return (
        suite.suite_id === props.id &&
        <>
          <div key={uuid_v4()}>
            <h1 className="text-center text-white my-5">{suite.suite_name}</h1>
          </div>
          <div className="container">
            <div className='d-flex justify-content-center'>

              {/** -------------- CAROUSEL ---------- */}
              <div id="carouselExampleIndicators" className="carousel slide w-75" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="..." className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>


            {/** -------------- CALENDRIER -------------- */}
            <div className='row'>
              <div className="col-12 col-xl-6 bg-danger">
                <div className="row">
                  <div className="col-6">
                    <DatePicker
                      locale="fr"
                      selected={startDate}
                      onChange={onChange}
                      startDate={startDate}
                      endDate={endDate}
                      selectsRange
                      inline
                    />
                  </div>
                  <div className="col-6">
                    <div className="my-2 bg-light rounded-3">
                      <p className='p-2 '>
                        Du : {startDate.toLocaleDateString()} au : {endDate ? endDate.toLocaleDateString() : ""}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-6">
                {/**--------------- DESCRIPTION ---------------- */}
                <div className="d-flex justify-content-center my-3 p-2 text-white" >
                  <div>
                    {suite.suite_description}
                  </div>
                </div>
              </div>
            </div>

            {/** -------------- BOUTON DE VALIDATION -------------- */}
            <div>
              <button className="btn btn-outline-success" onClick={handleValidation}>Valider la réservation</button>
            </div>

          </div>
        </>
      )
    })
  )
}
