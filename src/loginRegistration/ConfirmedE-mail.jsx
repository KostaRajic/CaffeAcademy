/* eslint-disable react/prop-types */
import { useState } from 'react'
import AcademyImg from '../assets/Image//Header Images/academy-logo.png'
import { Login } from '../loginRegistration/Login'


export const ConfirmedEmail = ({closeConfirm}) => {
    const [ showLogin, setShowLogin ] = useState(false)

    const handleConfirm = (e) => {
        setShowLogin(!showLogin);
        //closeConfirm('close-confirm')
    }

    // const onSubmit = (e) => {
    //     e == 'onSubmit' ? setShowLogin(false) : setShowLogin(true)
    // }


    return <div id='confirmedEmail'>
    <img src={AcademyImg} alt="AcademyImg" />
    <div className='confirmedEmailClass'>
        <h3>E-mail adresa potvrđena</h3>
        <p>Uspešno ste potvrdili vašu e-mail adresu.</p>
    </div>
    <button onClick={handleConfirm}>U redu</button>
    { showLogin && <Login />}

</div>
}