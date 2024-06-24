/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Login } from "./Login"
import {useState, useEffect, useRef} from 'react';
import { Registration } from "./Registration";


export function NotRegistredComp({ handleLoginModal }) {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const refMethod  = useRef(null);

    const handleRegister = () => {
        setShowRegister(!showRegister)
    }

    const handleLogin = () => {
        setShowLogin(!showLogin)
    }

    const tryFunction = (state) => {
        handleLoginModal('goBack')
    }
    
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);

    return (() => {
        document.removeEventListener('click', handleClickOutside, true);
        })
    }, [showLogin, showRegister])


    const handleClickOutside = (e) => {
        if(!showLogin && !showRegister && !refMethod?.current?.contains(e.target)) {
            tryFunction()
        }
    }

    return <div className="notRegistredBackground">
        <div className="notRegistred" ref={refMethod}>
           
            <p>Za poručivanje potrebno je da se prijavis na svoj nalog.</p>
            <button onClick={handleLogin}>PRIJAVI SE</button>
            
            <p>Još uvek nemaš nalog?</p>
            <button onClick={handleRegister}>REGISTRUJ SE</button>
            
        </div>
        { showLogin && <Login/> }
        { showRegister && <Registration />}

    </div>
}