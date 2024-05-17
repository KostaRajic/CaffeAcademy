/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import AcademyImg from '../assets/Image//Header Images/academy-logo.png'
import { PasswrodSuccess } from './PasswordSuccess'

import { PasswordError } from './PasswordError'

export const CreateNewPassword = ({ backFromCreate }) => {
   const [user, setUser] = useState({
      password: '',
      confirmPassword: ''
   });
   const [ showPassSuccess, setShowPassSuccess ] = useState(false)

   const handleChange = (e) => {
      const { name, value } = e.target
      setUser((prev) => ({
         ...prev,
         [name]: value
   }))
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      if (user.password === user.confirmPassword) {
         setShowPassSuccess(!showPassSuccess)
   } 
   backFromCreate('goBack')
}

   useEffect(() => {
      let lsUser = JSON.parse(localStorage.getItem('user'));
      lsUser.password = user.password
      lsUser.confirmPassword = user.confirmPassword
      console.log(lsUser)
      localStorage.setItem('user', JSON.stringify(lsUser))
      
      
   }, [user])

    return <div id="createNewPasswordSection">
         <img src={AcademyImg} alt="AcademyImg" />
         <h3>Kreiraj novu lozinku</h3>
         <form onSubmit={handleSubmit}>
  
            <label htmlFor="password">
               <h5>Nova Lozinka*</h5>
               <input type='text' value={user.password} name='password' onChange={handleChange} placeholder="Nova Lozinka" id='password'/>
            </label>

            <label htmlFor="password">
               <h5>Ponovi Novu Lozinku*</h5>
               <input type='text' value={user.confirmPassword} name='confirmPassword' onChange={handleChange} placeholder="Lozinka" id='confirmPassword'/>
            </label>

            <button type='submit'>Kreiraj</button>
         </form>
         { showPassSuccess && <PasswrodSuccess/>}
        </div>
}