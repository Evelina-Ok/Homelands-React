import { createContext, useEffect, useState } from "react";


export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [userToken, setUserToken] = useState();


    useEffect (() => {
        if (!userData && sessionStorage.getItem('userData')) {
            setUserData(JSON.parse(sessionStorage.getItem('userData')));
        }
    }, []); // Only run on mount, not on every userData change


    useEffect(() => {
        if (userData?.access_token) {
            sessionStorage.setItem('userData', JSON.stringify(userData));
        }
    }, [userData]); // This will trigger only when userData is updated
    
      return (
        <UserContext.Provider value={{ userData, setUserData, userToken, setUserToken }}>
          {children}
        </UserContext.Provider>
      );
};

