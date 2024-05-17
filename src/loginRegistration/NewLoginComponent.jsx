/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react"

export const NewLoginComponents = ({props}) => {
    // const [goBack, setGoBack] = useState(false)
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
  
              console.log('Login Succes')
          }
     }

    return (
        <form onSubmit={handleSubmit}>
         
         <label>
            <h5  className='loginEmail'>E-mail</h5>
            <input type='email' name='email' placeholder="E-mail adresa" value={user.email} onChange={handleChange}/>
         </label>

         <label>
            <h5 className='password'>Lozinka</h5>
            <input type='password' name='password' placeholder="Lozinka" id='password' value={user.password}  onChange={handleChange}/>
         </label>
         <p>Zaboravljena lozinka?</p>
         <button type='submit'>Prijavi Se</button>
         
         </form>
    )
} 