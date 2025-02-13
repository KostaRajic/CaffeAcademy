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

   const [ showPassSuccess, setShowPassSuccess ] = useState(false);
   const [ showPassError, setShowPassError ] = useState(false)
   const [ formErrors, setFormErrors ] = useState({});
   const [ isSubmit, setIsSubmit ] = useState(false)
   console.log(formErrors)
   const handleChange = (e) => {
      const { name, value } = e.target
      setUser((prev) => ({
         ...prev,
         [name]: value
   }))
   }

   const handleSubmit = (e) => {
      if ((Object.keys(formErrors).length === 0 && isSubmit)) {
         setShowPassSuccess(true)  
      } else if (Object.keys(formErrors).length !== 0) {
         setShowPassError(true)
      }
      e.preventDefault();
      setFormErrors(validate(user))
      setIsSubmit(true)
}

   useEffect(() => {
      let lsUser = JSON.parse(localStorage.getItem('user'));
      lsUser.password = user.password
      lsUser.confirmPassword = user.confirmPassword
      localStorage.setItem('user', JSON.stringify(lsUser))
   }, [user])


   const validate = (values) => {
      const errors = {};
      
      if (!values.password) {
              errors.password = 'Lozinka je neophodna.'
      } else if (!values.confirmPassword) {
              errors.confirmPassword = 'Lozinka je neophodna.'
      } else if (values.password.split('').every((e => !/[A-Z]/.test(e)))) {
              errors.password = 'Lozinka mora da sadrži minimum 6 karaktera, jedno veliko slovo, jedno malo slovo i jedan broj.'
      } else if (values.password.split('').every((e => !/[a-z]/.test(e)))) {
              errors.password = 'Lozinka mora da sadrži minimum 6 karaktera, jedno veliko slovo, jedno malo slovo i jedan broj.'
      } else if (values.password.split('').map(e => Number(e)).every(e => isNaN(e))) {
              errors.password = 'Lozinka mora da sadrži minimum 6 karaktera, jedno veliko slovo, jedno malo slovo i jedan broj.'
      } else if (values.password.length < 6) {
              errors.password = 'Lozinka mora da sadrži minimum 6 karaktera, jedno veliko slovo, jedno malo slovo i jedan broj.'   
      } else if (values.password !== values.confirmPassword) {
              errors.confirmPassword = 'Lozinke se ne podudaraju.'
}
return errors    
}

    return <div id="createNewPasswordSection">
         <img src={AcademyImg} alt="AcademyImg" />
         <h3>Kreiraj novu lozinku</h3>
         <form onSubmit={handleSubmit}>

            <label htmlFor="password">
               <h5>Nova Lozinka*</h5>
               <input type='password' value={user.password} name='password' onChange={handleChange} placeholder="Nova Lozinka" id='password'/>
            </label>

            <label htmlFor="password">
               <h5>Ponovi Novu Lozinku*</h5>
               <input type='password' value={user.confirmPassword} name='confirmPassword' onChange={handleChange} placeholder="Lozinka" id='confirmPassword'/>
            </label>

            <button type='submit'>Kreiraj</button>
         </form>
        { showPassSuccess && <PasswrodSuccess/> }
        { showPassError && <PasswordError tryAgain={() => setShowPassError(false)} /> }
        </div>
}