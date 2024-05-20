/* eslint-disable react/prop-types */
import { useState } from 'react'
import AcademyImg from '../assets/Image//Header Images/academy-logo.png'
import { ConfirmedEmail } from './ConfirmedE-mail'


export const ConfirmEmail = () => {
    const [ confirmEmail, setConfirmEmail ] = useState(false)

    function handleConfirm() {
        setConfirmEmail(true)
    }

    return <div id='confirmEmail'>
    <img src={AcademyImg} alt="AcademyImg" />
    <div className='confirmEmailClass'>
        <h3>Potvrdite e-mail adresu</h3>
        <p>Molimo vas potvrdite vašu e-mail adresu.</p>
    </div>
    <button onClick={handleConfirm}>U redu</button>

    { confirmEmail && <ConfirmedEmail/>}
</div>
}