import { useState } from 'react'
import AcademyImg from '../assets/Image//Header Images/academy-logo.png'
import { ForgottenPassword } from './ForgottenPassword'

export const Login = ({closeModal}) => {
   const [forgotPassword, setForgotPassword] = useState(false)

    return <div id="loginSection">
         <img src={AcademyImg} alt="AcademyImg" />
         <h3>Prijavi se</h3>
         <label htmlFor="e-mail">
            <h5 className='email'>E-mail</h5>
            <input type='email' placeholder="E-mail adresa" id='e-mail'/>
         </label>

         <label htmlFor="password">
            <h5 className='password'>Lozinka</h5>
            <input type='password' placeholder="Lozinka" id='password'/>
         </label>
         <p onClick={() => setForgotPassword(true)}>Zaboravljena lozinka?</p>
         <button>Prijavi Se</button>

         {forgotPassword && <ForgottenPassword />}
    </div>
}