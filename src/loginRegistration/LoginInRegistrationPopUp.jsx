import { Login } from "./Login";

/* eslint-disable react/prop-types */
export function LoginInRegistrationPopUp({closeModal}) {

    return <div className="loginPopUpModalBackground" onClick={() => closeModal(false)}>
       <Login /> 
        <div className="loginPopUpModal">
            <button className="logIn">PRIJAVI SE</button>
            <button className="register">REGISTRUJ SE</button>
        </div>
        
    </div>
}