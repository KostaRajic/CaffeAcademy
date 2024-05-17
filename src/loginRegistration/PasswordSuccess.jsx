import { useState } from 'react'
import AcademyImg from '../assets/Image/Header Images/academy-logo.png'
import { Login } from './Login'

export const PasswrodSuccess = () => {
    const [ goBack , setGoBack ] = useState(false)

    const handleBack = () => {
        setGoBack(!goBack)
    }

    return <div id='passwrodSuccess'>
        <img src={AcademyImg} alt="AcademyImg" />
        <div className='passwordChanged'>
            <h3>Nova lozinka kreirana</h3>
            <p>Uspešno ste kreirali novu lozinku.</p>
        </div>
        <button type='button' onClick={handleBack}>U redu</button>
        { goBack && <Login />}
    </div>
}