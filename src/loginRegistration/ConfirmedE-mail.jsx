import { useState } from 'react'
import AcademyImg from '../assets/Image//Header Images/academy-logo.png'
import { Login } from './Login'


export const ConfiredEmail = () => {
    const [goLogin, setGoLogin] = useState(false)


    return <div id='confirmedEmail'>
    <img src={AcademyImg} alt="AcademyImg" />
    <div className='confirmedEmailClass'>
        <h3>E-mail adresa potvrđena</h3>
        <p>Uspešno ste potvrdili vašu e-mail adresu.</p>
    </div>
    <button onClick={() => setGoLogin(!goLogin)}>U redu</button>

    {goLogin && <Login />}
</div>
}