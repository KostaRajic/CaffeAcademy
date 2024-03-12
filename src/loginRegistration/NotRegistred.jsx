/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { useEffect, useRef, useState } from "react"
import { Login } from "./Login";
import { Registration } from "./Registration";
import { HomePage } from "../pages/HomePage";


export function NotRegistredComp({closeModal, onCLose}) {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegisteration, setShowRegisteration] = useState(false);
    const [hideModal, setHideModal] = useState(false)
    const refMethod = useRef(null);
    // console.log('Show login = ', showLogin)
    // console.log('showRegisteration = ', showRegisteration)
    // console.log('hideModal = ', hideModal)


    // useEffect(() => {
    //     document.addEventListener('click', handleClickOutside, true)
    // }, [])

    // const handleClickOutside = (e) => {
    //     if(!refMethod.current.contains(e.target)) {
    //         setHideModal(!hideModal)
    //     }
    // }

    return <div className="notRegistredBackground">
        <div className="notRegistred">
            
            <p>Za poručivanje potrebno je da se prijavis na svoj nalog.</p>
            <button onClick={() => setShowLogin(!showLogin)}>PRIJAVI SE</button>
            
            <p>Još uvek nemaš nalog?</p>
            <button  onClick={() => setShowRegisteration(!showRegisteration)}>REGISTRUJ SE</button>
            
        </div>
        {hideModal && <HomePage/>}
        { showLogin && <Login/> }
        { showRegisteration && <Registration/> }
    
    </div>
}