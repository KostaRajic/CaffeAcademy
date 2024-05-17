/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

export const Context = createContext();

export const useContextAuth = () => {
    return useContext(Context);
}

export const UseContextProvider = ({children}) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ showModal, setShowModal ] = useState(false);
    const [ showModal2, setShowModal2 ] = useState(false);


    return <div>
        <Context.Provider value = {[ isLoggedIn, setIsLoggedIn, showModal,  setShowModal, showModal2, setShowModal2 ]}>
            {children}
        </Context.Provider>
    </div>
}