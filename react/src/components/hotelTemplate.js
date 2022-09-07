import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import SuiteHotelTemplate from "./SuiteHotelTemplate";
import { NavLink } from 'react-router-dom'
import { v4 as uuid_v4 } from "uuid"
import { HotelContext } from "../context/HotelContext";

export default function HotelTemplate(props) {

  const [suites, setSuites] = useState()
  const [hotels, setHotels] = useState();
  const { setCurrentHotel, setCurrentSuite } = useContext(HotelContext);

  useEffect(() => {
    const fetchHotels = async () => {
      await axios.get(process.env.REACT_APP_AXIOS_URL+"/front/hotels")
      .then(response => {
        setHotels(response.data);
      })
    }
    fetchHotels();

    const fetchSuites = async () => {
      await axios.get(process.env.REACT_APP_AXIOS_URL+"/front/suites")
      .then(response => {
        setSuites(response.data);
      })
    }
    fetchSuites();

  }, [])

  const handleSuite = (suite, hotel) => {
    setCurrentSuite(suite)
    setCurrentHotel(hotel)
  }

  const replaceText = (text) => {
    return text.replace("&ocirc;", 'ô').replaceAll("&eacute;", "é").replaceAll("&agrave;", "à").replaceAll("&rsquo;", "'").replaceAll("&#039;", "'")
  }

  return (
    hotels && hotels.map(hotel => {
      return (
        hotel.hotel_ville === props.ville &&
        <div className=" container text-white" key={uuid_v4()}>
          <div className="row mt-5 p-5 border-bottom">
            {/****************************** IMAGE */}
            <div className="col-12 col-xl-6 d-flex justify-content-center align-items-center">
              <img src={require("../assets/containersAssets/hotels/" + hotel.hotel_ville + "/" + hotel.hotel_image)} alt="hotel de luxe" className="img-fluid rounded-3 " />
            </div>
            <div className="col-12 col-xl-6 my-2 d-flex flex-column justify-content-center">
              <div className="row">
                {/****************************** TITRE */}
                <h3 className="mb-3">{replaceText(hotel.hotel_name).toUpperCase()}</h3>
               
                {/****************************** DESCRIPTION */}
                <div className="border-top border-bottom p-3 mx-2">{replaceText(hotel.hotel_description)}</div>
              </div>
             
              <div className="d-flex align-items-center justify-content-start ">
                {/****************************** ADRESSE */}
                  <div>
                <div className="opacity-50 text-xl-start d-flex flex-column align-items-start my-3">
                    <div>{hotel.hotel_name}</div>
                    <div>{hotel.hotel_adresse}</div>
                    <div>{hotel.hotel_cp} - {hotel.hotel_ville}</div>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone me-2" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                      </svg>
                      {hotel.hotel_telephone}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <h3 className="text-center mt-5">Les suites de l'établissement</h3>
          <div className="d-flex justify-content-around mt-5 flex-wrap">

            {/** ------------------- SUITES ------------------- */}
            {
              suites && suites.map(suite => {
                return (
                  suite.suite_hotel === hotel.hotel_id &&
                  <div key={uuid_v4()}>

                    <SuiteHotelTemplate

                      image={require(`../assets/containersAssets/hotels/${hotel.hotel_ville}/${suite.suite_image}`)}
                      nom={replaceText(suite.suite_name)}
                      description={replaceText(suite.suite_description)}
                      prix={suite.suite_prix}
                      boutonReservation={
                        <NavLink to="/reservation" className="btn btn-outline-primary" onClick={() => handleSuite(suite.suite_id, hotel.hotel_id)}>
                          Réserver
                        </NavLink>}
                    />
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    })
  )
}

