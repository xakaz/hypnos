import React, {createContext, useState} from "react";

export const hotelContext = createContext();

const HotelContextProvider  = (props) => {
  
  const [hotelId, setHotelId] = useState(0);

  return (
    <hotelContext.Provider value={{hotelId, setHotelId}}>
      {props.children}
    </hotelContext.Provider>
  )
}

export default HotelContextProvider;