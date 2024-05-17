/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useRef, useState } from 'react'
import AcademyImg from '../assets/Image//Header Images/academy-logo.png'
import { ForgottenPassword } from '../loginRegistration/ForgottenPassword'
import { useContextAuth } from '../context/ModalContext'
import { RegistredHomePage } from '../pages/RegistredHomePage'


export const Login = (props) => {
   // const [ showModal2, setShowModal2 ] = useContext(Context2)
   // const [ showModal, setShowModal ] = useContext(Context3)
   // const [ isLoggedIn, setIsLoggedIn ] = useContext(Context);
   const [ showModal, setShowModal, showModal2, setShowModal2, isLoggedIn, setIsLoggedIn ] = useContextAuth();
   // console.log('show modal2', showModal2)
   // console.log('show modal', showModal)
   console.log('isLoggedIn', isLoggedIn)
   const [ forgottenPassword, setForgottenPassword ] = useState(false)
   const [user, setUser] = useState({
      email: '',
      password: ''
   })

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
            setIsLoggedIn(true)
         }
    }

   const handleWithForgottenPass = () => {
      setForgottenPassword(!forgottenPassword)
   }

   const handleGoBack = (e) => {
      setShowModal2(false)
      setShowModal(false)
   }

   const backFromForgotten = (state) => {
      state === 'goBack' ? setForgottenPassword(false) : setForgottenPassword(true)
   }

    return <div id="loginSection">

         <img
         src={AcademyImg} 
         alt="AcademyImg"
         onClick={handleGoBack}
         />
        
         <h3>Prijavi se</h3>

         <form onSubmit={handleSubmit}>
         
            <label>
               <h5>E-mail</h5>
               <div></div>
               <input type='email' name='email' placeholder="E-mail adresa" value={user.email} onChange={handleChange}/>
            </label>

            <label>
               <h5>Lozinka</h5>
               <div></div>
               <input type='password' name='password' placeholder="Lozinka" id='password' value={user.password}  onChange={handleChange}/>
            </label>
            <p onClick={handleWithForgottenPass}>Zaboravljena lozinka?</p>
            <button type='submit'>Prijavi Se</button>
         </form>
         {forgottenPassword && <ForgottenPassword backFromForgotten={(e) => backFromForgotten(e)}/>}
         { isLoggedIn && <RegistredHomePage />}
    </div>
}