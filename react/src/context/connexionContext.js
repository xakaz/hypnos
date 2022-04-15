import React, {createContext, useState} from "react";

export const ConnexionContext = createContext();

const ConnexionContextProvider  = (props) => {
  
  const [isConnected, setIsConnected] = useState(false);
  const [role, setRole] = useState(null);

  return (
    <ConnexionContext.Provider value={{isConnected, setIsConnected, role, setRole}}>
      {props.children}
    </ConnexionContext.Provider>
  )
}

export default ConnexionContextProvider;
