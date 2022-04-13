import React, {createContext, useState} from "react";

//création du contexte
export const connexionContext = createContext();

const ConnexionContextProvider = props => {

  const [isConnect, setIsConnect] = useState(false)

  const connected = () => {
    setIsConnect(true)
  }

  return (
    // Le provider va apporder les données du contexte dans props.children
    // Les données ce sont les props dans value
    <connexionContext.Provider value={{connected}}>
      {props.children}
    </connexionContext.Provider>
  )
  
}

export default ConnexionContextProvider;