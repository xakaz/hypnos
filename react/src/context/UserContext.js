import React, {createContext, useState} from "react";

export const UserContext = createContext();

const UserContextProvider  = (props) => {
  
  const [userConnected, setUserConnected] = useState({});


  return (
    <UserContext.Provider value={userConnected, setUserConnected}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;
