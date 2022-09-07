import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { v4 as uuid_v4 } from "uuid"
import { useNavigate } from 'react-router-dom'


export default function Hotels() {



  const [hotels, setHotels] = useState();

  useEffect(() => {
    const fetchHotels = async () => {
      await axios.get(process.env.REACT_APP_AXIOS_URL+"/front/hotels")
      .then(response => {
        setHotels(response.data);
      })
    }
    fetchHotels();

    }, [])
    
    const navigation = useNavigate()

  const handleNavigation = (hotel) => {
    navigation("/hotel/" + hotel.toLowerCase().replace(" ", ""))
  }

  const replaceText = (text) => {
    return text.replace("&ocirc;", 'ô').replaceAll("&eacute;", "é").replaceAll("&agrave;", "à").replaceAll("&rsquo;", "'").replaceAll("&#039;", "'")
  }



  return (
    <div className="container">
      {
        hotels &&
        hotels.map(hotel => {
          return (
            <div className='row my-5 text-light' key={uuid_v4()}>
              {/* IMAGE */}
              <div className="col-12 col-xl-6 d-flex justify-content-center align-items-center">
                <img src={require(`../../assets/containersAssets/hotels/${hotel.hotel_ville}/${hotel.hotel_image}`)} alt={hotel.hotel_name} height="300px" width="450px" className='rounded' />
              </div>

              {/* HOTEL */}
              <div className="col-12 col-xl-6 d-flex align-items-center">
                <div>
                  <h3 onClick={() => handleNavigation(hotel.hotel_ville)} >{replaceText(hotel.hotel_name).toUpperCase()}</h3>
                  <hr />
                  <p>{replaceText(hotel.hotel_description)}
                  </p>
                  <hr />
                  <div className="row">
                    <div className='col-8'>
                      <div className="row">
                        <div className="col-2 d-flex align-items-center justify-content-end">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                          </svg>
                        </div>
                        <div className="col-10">
                          <div>{replaceText(hotel.hotel_adresse)}</div>
                          <div>{hotel.hotel_cp} - {replaceText(hotel.hotel_ville)}</div>
                        </div>
                      </div>
                    </div>
                    <div className='d-flex justify-content-center col-4'>
                      <div>
                        <NavLink to={"/hotel/" + hotel.hotel_ville.toLowerCase().replace(" ", "")} className="btn btn-outline-light mb-3">Visiter</NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }

    </div>
  )
}
