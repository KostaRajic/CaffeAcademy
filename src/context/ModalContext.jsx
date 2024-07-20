/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const Context = createContext();

export const useContextAuth = () => {
    return useContext(Context);
}

export const UseContextProvider = ({children}) => {
    const [ showModal, setShowModal ] = useState(false);
    const [ showModal2, setShowModal2 ] = useState(false);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ showCoffeeInfo, setShowCoffeeInfo ] = useState(false)
    const [ count, setCount ] = useState(0)
    const [ coffeeBasket, setCoffeeBasket ] = useState(0);
    const [ showPopUpProfileIcon, setShowPopUpProfileIcon ] = useState(false);
    const [ basket, setBasket ] = useState([])


    const sumOfCoffee = basket?.reduce((accumulator, currentValue) => {
        return accumulator + currentValue?.count
      }, 0);

    
    const value = useMemo(() => {
        return {
            showModal,
            setShowModal,
            showModal2,
            setShowModal2,
            count,
            setCount,
            isLoggedIn,
            setIsLoggedIn,
            showCoffeeInfo,
            setShowCoffeeInfo,
            coffeeBasket,
            setCoffeeBasket,
            showPopUpProfileIcon, 
            setShowPopUpProfileIcon,
            basket, 
            setBasket,
            sumOfCoffee
        }
    }, [
        showModal,
        setShowModal,
        showModal2, 
        setShowModal2, 
        count,
        setCount,
        isLoggedIn,
        setIsLoggedIn,
        showCoffeeInfo, 
        setShowCoffeeInfo,
        coffeeBasket, 
        setCoffeeBasket,
        showPopUpProfileIcon, 
        setShowPopUpProfileIcon,
        basket, 
        setBasket,
        sumOfCoffee
    ])

    return <div>
        <Context.Provider value = {value}>
            {children}
        </Context.Provider>
    </div>
}