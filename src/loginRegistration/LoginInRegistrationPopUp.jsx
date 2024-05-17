/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useRef, useState } from "react"
import { Login } from "./Login"
import { Registration } from "./Registration"
import { HomePage } from "../pages/HomePage";

/* eslint-disable react/prop-types */
export function LoginInRegistrationPopUp({handleLoginModal, props}) {
    const [ showLogin, setShowLogin] = useState(false);
    const [ showRegister, setShowRegister ] = useState(false);
    const refMethod = useRef(null)

    const handleLogin = () => {
        setShowLogin(!showLogin)
    }

    const handleRegister = () => {
        setShowRegister(!showRegister)
    }

    const closeModal = (e) => {
        //e === 'goBack' ? setShowLogin(false) : setShowLogin(true)
        e === 'goBack' ? setShowRegister(false) : setShowRegister(true)
    }

    const tryFunction = (state) => {
        handleLoginModal('zzbz')
    }


    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);

    return (() => {
        document.removeEventListener('click', handleClickOutside, true);
        })
    }, [showLogin, showRegister])


    const handleClickOutside = (e) => {
        if( !showLogin && !showRegister && !refMethod?.current?.contains(e.target)) {
            tryFunction()
        }
    }

    return <div className="loginPopUpModalBackground">
       
        <div className="loginPopUpModal" ref={refMethod}>
            <button className="logIn" onClick={handleLogin}>PRIJAVI SE</button>
            <button className="register" onClick={handleRegister}>REGISTRUJ SE</button>
        </div>
        
        { showLogin && <Login />}
        { showRegister && <Registration goBackFunction={(e) => closeModal(e)}/>}
    </div>
}