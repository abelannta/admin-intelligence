import React, { useState } from "react";

interface IGlobalContextProps {
  user: any;
  setUser: (user: any) => void;
}

export const GlobalContext = React.createContext<IGlobalContextProps>({
  user: {},
  setUser: () => {},
});

export const GlobalContextProvider = (props: any) => {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <GlobalContext.Provider
      value={{
        user: currentUser,
        setUser: setCurrentUser,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
