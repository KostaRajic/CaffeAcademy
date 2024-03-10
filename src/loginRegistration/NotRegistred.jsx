/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { useState } from "react"
import { Login } from "./Login";
import { Registration } from "./Registration";


export function NotRegistredComp({closeModal}) {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegisteration, setShowRegisteration] = useState(false)


    return <div className="notRegistredBackground">
        <div className="notRegistred">
        <label>
            <p>Za poručivanje potrebno je da se prijavis na svoj nalog.</p>
            <button onClick={() => setShowLogin(true)}>PRIJAVI SE</button>
            
        </label>
        <label>
            <p>Još uvek nemaš nalog?</p>
            <button  onClick={() => setShowRegisteration(true)}>REGISTRUJ SE</button>
            
        </label>
        </div>
        { showLogin && <Login />}
        { showRegisteration && <Registration />}
    </div>
}