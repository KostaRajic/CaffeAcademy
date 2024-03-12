/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import AcademyImg from '../assets/Image//Header Images/academy-logo.png'
import { ForgottenPassword } from './ForgottenPassword'
import { HomePage } from '../pages/HomePage'
import App from '../App'
import { RegistredHomePage } from '../pages/RegistredHomePage'


export const Login = ({closeModal}) => {
   const [forgotPassword, setForgotPassword] = useState(false)
   const [goBackImg, setGoBackImg] = useState(false);
   const [user, setUser] = useState({
      email: '',
      password: ''
   })
   const[loginSuccess, setLoginSucces] = useState(false)

   const handleChange = (e) => {
      setUser((prev) => ({
         ...prev,
         [e.target.name]: e.target.value
   }))   
   }

   function handleSubmit(e) {
      e.preventDefault();
      const lsUser = JSON.parse(localStorage.getItem('user'));
        if (lsUser.email === user.email && lsUser.password === user.password) {
            
         console.log('loginSuccess ', loginSuccess);
            setLoginSucces(!loginSuccess)
            
        }
   }
   // console.log('forgotPassword ', forgotPassword);
   console.log('goBackImg ',  goBackImg)

    return <div id="loginSection">
      
         <img src={AcademyImg} alt="AcademyImg" onClick={() => setGoBackImg(!goBackImg)}/>
         
         <h3>Prijavi se</h3>

         <form onSubmit={handleSubmit}>
         
         <label>
            <h5  className='loginEmail'>E-mail</h5>
            <input type='email' name='email' placeholder="E-mail adresa" value={user.email} onChange={handleChange}/>
         </label>

         <label>
            <h5 className='password'>Lozinka</h5>
            <input type='password' name='password' placeholder="Lozinka" id='password' value={user.password}  onChange={handleChange}/>
         </label>
         <p onClick={() => setForgotPassword(!forgotPassword)}>Zaboravljena lozinka?</p>
         <button type='submit'>Prijavi Se</button>
         
         </form>

         {loginSuccess && <RegistredHomePage />}

         {goBackImg && <HomePage />}

         {forgotPassword && <ForgottenPassword />}

    </div>
}