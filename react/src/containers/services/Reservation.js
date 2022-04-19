import { HotelContext } from '../../context/HotelContext';
import { UserContext } from '../../context/UserContext'
import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { v4 as uuid_v4 } from "uuid"
import DatePicker, { registerLocale } from "react-datepicker";
import fr from 'date-fns/locale/fr/';
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom'
registerLocale('fr', fr)

export default function Reservation() {

  ///////////////////////////////////////// CONTEXTS
  const { currentHotel, currentSuite } = useContext(HotelContext)
  const { currentUser, toggleModals } = useContext(UserContext)


  ///////////////////////////////////////// HOTELS
  const [hotels, setHotels] = useState()
  const [hotelSelect, setHotelSelect] = useState(parseInt(currentHotel) ? parseInt(currentHotel) : 2)

  ///////////////////////////////////////// SUITES
  const [suites, setSuites] = useState()
  const [suiteSelect, setSuiteSelect] = useState(parseInt(currentSuite) ? parseInt(currentSuite) : 7)

  ///////////////////////////////////////// CALENDRIER
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };


  ///////////////////////////////////////// DATA
  const [data, setData] = useState({
    user: "",
    suite: "",
    start: "",
    end: "",
    date: ""
  })


  const [userId, setUserId] = useState()

  /////////////////////////////////////////ECOUTEURS D'EVENEMENTS
  const handleChangeVille = (e) => {
    setHotelSelect(e.target.value)
    suites.map(suite => {
      return (
        parseInt(e.target.value) === suite.suite_hotel &&
        setSuiteSelect(suite.suite_id)
      )
    })
  }
  const today = new Date()

  const handleChangeSuite = (e) => {
    setSuiteSelect(e.target.value)
  }
  const navigation = useNavigate()
  const validData = () => {
    currentUser ?
      setData({
        user: parseInt(userId),
        suite: suiteSelect,
        start: Date.parse(startDate),
        end: endDate ? Date.parse(endDate) : null,
        date: Date.parse(today)
      })
      :
      navigation("/mon-compte")
  }


  ///////////////////////////////////////// REQUETES GET AXIOS
  useEffect(() => {
    axios.get("http://localhost/server/front/hotels")
      .then(response => { setHotels(response.data); })
      .catch(err => { console.error(err) })

    axios.get("http://localhost/server/front/suites")
      .then(response => { setSuites(response.data); })
      .catch(err => { console.error(err) })

    axios.get("http://localhost/server/front/user")
      .then(response => {
        setUserId(response.data.map(userDatas => {
          return currentUser.email === userDatas.user_mail && userDatas.user_id

          // if (currentUser.email === userDatas.user_mail) {
          //   return userDatas.user_id
          // }
        }));
      })
      .catch(err => { console.error(err) })
  }, [])

  //////////////////////////////////////// REQUETES POST AXIOS
  const handleReservation = async (e) => {
    e.preventDefault()
    console.log(data)
    await axios.post("http://localhost/server/back/setBooking", data)
      .then(response => { console.log(response); })
      .catch(err => { (console.error(err)) })
    navigation("/mon-compte")
  }

  return (
    <div className='container my-5 text-white'>
      <form onSubmit={handleReservation}>
        <div className="row">
          <div className="col-2  d-none d-xl-flex"></div>
          <div className='col-8 d-flex flex-column align-items-start p-5 border rounded-3'>

            <div className="row w-100 mb-3">
              <div className="col-6">
                {/******************************************************* HOTEL */}
                <div className="form-group mb-3">
                  <label htmlFor="hotel_id" className="form-label">Hôtels</label>
                  <select className="form-control" id="hotel_id" name="hotel_id" value={hotelSelect} onChange={handleChangeVille}>
                    {
                      hotels && hotels.map(hotel => {
                        return <option key={uuid_v4()} value={hotel.hotel_id}>{hotel.hotel_ville.toUpperCase()} - {hotel.hotel_name} </option>
                      })
                    }

                  </select>
                </div>

              </div>
              <div className="col-6">
                {/******************************************************* SUITE */}
                <div className="form-group mb-3">
                  <label htmlFor="suite_id" className="form-label">Suites</label>
                  <select className="form-control" id="suite_id" name="suite_id" value={suiteSelect} onChange={handleChangeSuite}>
                    {
                      suites && suites.map(suite => {
                        return (
                          suite.suite_hotel === parseInt(hotelSelect) &&
                          <option value={suite.suite_id} key={uuid_v4()} > {suite.suite_name} </option>
                        )
                      })
                    }
                  </select>
                </div>

              </div>
            </div>

            <div className="row ">
              <div className="col-12 col-xl-6 d-flex flex-column align-items-center justify-content-evenly">
                <div>
                  <h3 className='text-center'>CHOISISSEZ LES DATES DE VOTRE SEJOUR</h3>
                </div>
                {/******************************************************* CALENDRIER */}
                <div className='my-2'>
                  <DatePicker locale="fr"
                    // selected={startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    inline
                    showWeekNumbers
                    excludeDateIntervals={[{ start: new Date(0), end: new Date() }]}
                  />
                </div>
                {
                  startDate &&
                  <>
                  <p className='my-2'>
                    Du : {startDate ? startDate.toLocaleDateString() : ""} au : {endDate ? endDate.toLocaleDateString() : ""}
                  </p>
                  {suites && suites.map(suite => {
                    return (
                      suite.suite_id === suiteSelect && endDate &&
                      <>
                      Prix total : {suite.suite_prix * ( (Date.parse(endDate) - Date.parse(startDate)) / 86400000)} € pour {((Date.parse(endDate) - Date.parse(startDate)) / 86400000)} nuits</>
                    )
                  })}
                  </>

                }
              </div>
              <div className="col-12 col-xl-6 ">
                {
                  suites && suites.map(suite => {
                    return (
                      suite.suite_id === parseInt(suiteSelect) &&
                      <div key={uuid_v4()}>
                        {
                          hotels && hotels.map(hotel => {
                            return (
                              suite.suite_hotel === hotel.hotel_id &&
                              <div key={uuid_v4()} className="d-flex flex-column align-items-center">
                                <div>
                                  <img src={require("../../assets/containersAssets/hotels/" + hotel.hotel_ville + "/" + suite.suite_image)}
                                    alt={suite.suite_name} style={{ height: "200px" }} className="rounded-3 mb-3" />
                                </div>
                                <div>
                                  <h5 className='text-center'> {suite.suite_name} </h5>
                                  <hr />
                                  <p>{suite.suite_description}</p>
                                  <p className='text-end'>{suite.suite_prix} € / Nuit</p>
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>
                    )
                  })
                }
              </div>
              <div>
              </div>
              <button className='btn btn-primary my-3' onClick={currentUser ? validData : () => toggleModals("connexion")}>Réserver</button>
            </div>
          </div>
          <div className="col-2 d-none d-xl-flex"></div>
        </div>
      </form>
    </div>
  )
}
