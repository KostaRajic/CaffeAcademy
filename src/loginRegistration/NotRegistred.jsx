/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { useState } from "react"
import { Login } from "./Login";
import { Registration } from "./Registration";


export function NotRegistredComp({closeModal}) {
    const [showLogin, setShowLogin] = useState(false);


    return <div className="notRegistredBackground">
        <div className="notRegistred">
        <label>
            <p>Za poručivanje potrebno je da se prijavis na svoj nalog.</p>
            <button onClick={() => setShowLogin(true)}>PRIJAVI SE</button>
            {showLogin && <Login />}
        </label>
        <label>
            <p>Još uvek nemaš nalog?</p>
            <button  onClick={() => setShowLogin(true)}>REGISTRUJ SE</button>
            { showLogin && <Registration />}
        </label>
        </div>

       
    </div>
}