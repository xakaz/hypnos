import React, { useState, createContext } from "react";;

export const HotelContext = createContext()
export function HotelContextProvider(props) {


const [ currentHotel, setCurrentHotel ] = useState({})
const [ currentSuite, setCurrentSuite ] = useState({})


 return (
   <HotelContext.Provider value ={{ currentHotel, setCurrentHotel, currentSuite, setCurrentSuite }}>
     {props.children}
   </HotelContext.Provider>
 ) 
}