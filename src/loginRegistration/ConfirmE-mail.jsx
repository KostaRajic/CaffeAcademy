import { useState } from 'react'
import AcademyImg from '../assets/Image//Header Images/academy-logo.png'
import { Login } from './Login'
import { ConfiredEmail } from './ConfirmedE-mail'

export const ConfirmEmail = () => {
    const [goBack, setGoBack] = useState(false)
    console.log(goBack)

    return <div id='confirmEmail'>
    <img src={AcademyImg} alt="AcademyImg" />
    <div className='confirmEmailClass'>
        <h3>Potvrdite e-mail adresu</h3>
        <p>Molimo vas potvrdite vašu e-mail adresu.</p>
    </div>
    <button onClick={() => setGoBack(!goBack)}>U redu</button>
    {goBack && <ConfiredEmail/>}
</div>
}