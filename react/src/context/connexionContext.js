import React, {createContext, useEffect, useState} from "react";

export const ConnexionContext = createContext();

const ConnexionContextProvider  = (props) => {
  
  const [isConnected, setIsConnected] = useState(false);
  const [role, setRole] = useState();


  return (
    <ConnexionContext.Provider value={{isConnected, setIsConnected, role, setRole}}>
      {props.children}
    </ConnexionContext.Provider>
  )
}

export default ConnexionContextProvider;
