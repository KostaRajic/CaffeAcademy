/* eslint-disable no-undef */
import { useState } from "react"
import { Login } from "./Login"
import { Registration } from "./Registration"

/* eslint-disable react/prop-types */
export function LoginInRegistrationPopUp({closeModal}) {
    const [showLogin, setShowLogin] = useState(false)
    const [showRegisteration, setShowRegisteration] = useState(false)

    // onClick={() => closeModal(false)}
    return <div className="loginPopUpModalBackground">
       
        <div className="loginPopUpModal">
            <button className="logIn" onClick={() => setShowLogin(true)}>PRIJAVI SE</button>
            <button className="register" onClick={() => setShowRegisteration(true)}>REGISTRUJ SE</button>
        </div>
        {showLogin && <Login/>}
        {showRegisteration && <Registration />}
    </div>
}