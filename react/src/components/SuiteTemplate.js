import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { v4 as uuid_v4 } from "uuid"
import DatePicker, { registerLocale } from "react-datepicker";
import fr from 'date-fns/locale/fr/';
import "react-datepicker/dist/react-datepicker.css";
registerLocale('fr', fr)


export default function Reservation(props) {

  const [suites, setSuites] = useState();
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




  console.log(typeof(startDate))

  return (
  <>

            {/** -------------- CALENDRIER -------------- */}

                    <DatePicker
                      locale="fr"
                      selected={startDate}
                      onChange={onChange}
                      startDate={startDate}
                      endDate={endDate}
                      selectsRange
                      inline
                    />

                      <p className='p-2 '>
                        Du : {startDate.toLocaleDateString()} au : {endDate ? endDate.toLocaleDateString() : ""}
                      </p>
 
        </>
      )

}
