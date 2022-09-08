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


  ///////////////////////////////////////// STATES
  const [hotels, setHotels] = useState()
  const [hotelSelect, setHotelSelect] = useState(parseInt(currentHotel) ? parseInt(currentHotel) : 2)

  const [suites, setSuites] = useState()
  const [suiteSelect, setSuiteSelect] = useState(parseInt(currentSuite) ? parseInt(currentSuite) : 7)

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const today = new Date()

  const [data, setData] = useState({})
  const [validation, setValidation] = useState()
  const [userId, setUserId] = useState()

  ///////////////////////////////////////// FONCTIONS
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleChangeVille = (e) => {
    setHotelSelect(e.target.value)
    suites.map(suite => {
      return (
        parseInt(e.target.value) === suite.suite_hotel &&
        setSuiteSelect(suite.suite_id)
      )
    })
  }

  const handleChangeSuite = (e) => {
    setSuiteSelect(e.target.value)
  }
  const navigate = useNavigate()

  const validData = () => {
    currentUser &&
      setData({
        user: parseInt(userId),
        suite: suiteSelect,
        start: Date.parse(startDate) / 1000,
        end: endDate ? Date.parse(endDate) / 1000 : null,
        date: Date.parse(today) / 1000
      })
  }

  ///////////////////////////////////////// REQUETES GET AXIOS
  useEffect(() => {

    const fetchHotels = async () => {
      await axios.get(process.env.REACT_APP_AXIOS_URL + "/front/hotels")
        .then(response => { setHotels(response.data); })
        .catch(err => { console.error(err) })
    }
    fetchHotels();

    const fetchSuites = async () => {
      await axios.get(process.env.REACT_APP_AXIOS_URL + "/front/suites")
        .then(response => { setSuites(response.data) })
        .catch(err => { console.error(err) })
    }
    fetchSuites();

    const fetchUsers = async () => {
      await axios.get(process.env.REACT_APP_AXIOS_URL + "/front/user")
        .then(response => {
          response.data.map(userDatas => {
            if (currentUser) {
              return currentUser.email === userDatas.user_mail && setUserId(userDatas.user_id)
            }
            return null;
          });
        })
        .catch(err => { console.error(err) })
    }
    fetchUsers();
  }, [])

  //////////////////////////////////////// REQUETES POST AXIOS
  const handleReservation = (e) => {
    e.preventDefault()

    if (data !== "") {
      if (startDate !== 0) {
        if (endDate !== null) {
          if (data.end !== data.start) {
            axios.post(process.env.REACT_APP_AXIOS_URL + "/back/setBooking", data)
              .then(navigate("/mon-compte"))
              .catch(err => { (console.error(err)) })
          }
          else {
            setValidation("La date de fin de séjour doit être différente de celle du début !")
          }
        } else {
          setValidation("Vous devez choisir une date de fin de séjour !")
        }
      } else {
        setValidation("Vous devez choisir une date de début de séjour !")
      }
    }
  }

  const replaceText = (text) => {
    return text.replace("&ocirc;", 'ô').replaceAll("&eacute;", "é").replaceAll("&agrave;", "à").replaceAll("&rsquo;", "'").replaceAll("&#039;", "'")
  }

  ///////////////////////////////////////////////////////////////////////////////////////// 

  return (
    <div className='container my-5 text-white'>
      <form onSubmit={handleReservation}>

        <div className='d-flex flex-column align-items-start p-5 border rounded-3'>

          <div className="row w-100 mb-3">
            <div className="col-12 col-lg-6">
              {/******************************************************* HOTEL */}
              <div className="form-group mb-3">
                <label htmlFor="hotel_id" className="form-label">Hôtels</label>
                <select className="form-control" id="hotel_id" name="hotel_id" value={hotelSelect} onChange={handleChangeVille}>
                  {
                    hotels && hotels.map(hotel => {
                      return <option key={uuid_v4()} value={hotel.hotel_id}>{replaceText(hotel.hotel_ville).toUpperCase()} - {replaceText(hotel.hotel_name)} </option>
                    })
                  }
                </select>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              {/******************************************************* SUITE */}
              <div className="form-group mb-3">
                <label htmlFor="suite_id" className="form-label">Suites</label>
                <select className="form-control" id="suite_id" name="suite_id" value={suiteSelect} onChange={handleChangeSuite}>
                  {
                    suites && suites.map(suite => {
                      return (
                        parseInt(suite.suite_hotel) === parseInt(hotelSelect) &&
                        <option value={suite.suite_id} key={uuid_v4()} > {replaceText(suite.suite_name)} </option>
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
                  selected={startDate}
                  onChange={onChange}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  inline
                  showWeekNumbers
                  excludeDateIntervals={[{ start: new Date(0), end: (new Date() - 86400000) }]}
                />
              </div>
              {
                startDate && startDate !== 0 ?
                  <>
                    <p className='my-2'>
                      Du : {startDate ? startDate.toLocaleDateString() : ""} au : {endDate ? endDate.toLocaleDateString() : ""}
                    </p>
                    {suites && suites.map(suite => {
                      return (
                        parseInt(suite.suite_id) === parseInt(suiteSelect) && endDate && endDate !== 0 &&
                        <div key={uuid_v4()} >
                          Prix total : {parseInt(suite.suite_prix) * ((Date.parse(endDate) - Date.parse(startDate)) / 86400000)} € pour {((Date.parse(endDate) - Date.parse(startDate)) / 86400000)} nuits
                        </div>
                      )
                    })}
                  </>
                  :
                  <></>
              }
            </div>
            <div className="col-12 col-xl-6 ">
              {
                suites && suites.map(suite => {
                  return (
                    parseInt(suite.suite_id) === parseInt(suiteSelect) &&
                    <div key={uuid_v4()}>
                      {
                        hotels && hotels.map(hotel => {
                          return (
                            parseInt(suite.suite_hotel) === parseInt(hotel.hotel_id) &&
                            <div key={uuid_v4()} className="d-flex flex-column align-items-center">
                              <div>
                                <img src={require("../../assets/containersAssets/hotels/" + hotel.hotel_ville + "/" + suite.suite_image)}
                                  alt={suite.suite_name} style={{ height: "200px" }} className="rounded-3 mb-3" />
                              </div>
                              <div>
                                <h5 className='text-center'> {replaceText(suite.suite_name)} </h5>
                                <hr />
                                <p>{replaceText(suite.suite_description)}</p>
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
            <p className="text-danger text-center my-3">{validation}</p>
            <div className='row px-5'>
              <button className='btn btn-primary ' onClick={currentUser ? validData : () => toggleModals("inscription")}>Réserver</button>
            </div>
          </div>
        </div>
        <div className="col-2 d-none d-xl-flex"></div>

      </form>
    </div>
  )
}