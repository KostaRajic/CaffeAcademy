import { useState } from 'react'
import AcademyImg from '../assets/Image//Header Images/academy-logo.png'
import { PasswrodSuccess } from './PasswordSuccess'
import { Login } from './Login'

export const CreateNewPassword = () => {
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('')


   const [createPass, setCreatePass] = useState(false)

   const handleSubmit = (e) => {
      e.preventDefault();
      if (password === confirmPassword || password.length > 8 || password.toUpperCase().length < 1 || password.toLowerCase().length < 1 || typeof(password) !== 'number') {
         setCreatePass(true)
   }
   }
      
   
    return <div id="createNewPasswordSection">
         <img src={AcademyImg} alt="AcademyImg" />
         <h3>Kreiraj novu lozinku</h3>

         <form onSubmit={handleSubmit}>

               {createPass && <PasswrodSuccess />}
            <label htmlFor="password">
               <h5>Nova Lozinka*</h5>
               <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Nova Lozinka" id='password'/>
            </label>

            <label htmlFor="password">
               <h5>Ponovi Novu Lozinku*</h5>
               <input type='text' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Lozinka" id='password'/>
            </label>

            <button type='submit'>Kreiraj</button>
         </form>

        </div>
}