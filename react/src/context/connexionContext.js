import React, {createContext, useState} from "react";

export const ConnexionContext = createContext();

const ConnexionContextProvider  = (props) => {
  
  const [isConnected, setIsConnected] = useState(true);

  const connexion = () => {
    setIsConnected(!isConnected)
  }

  return (
    <ConnexionContext.Provider value={{isConnected, connexion}}>
      {props.children}
    </ConnexionContext.Provider>
  )
}

export default ConnexionContextProvider;
