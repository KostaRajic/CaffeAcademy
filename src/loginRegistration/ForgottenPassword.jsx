import { useState } from 'react'
import AcademyImg from '../assets/Image//Header Images/academy-logo.png'
import { Login } from './Login';

export const ForgottenPassword = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [formData, setFormData] = useState({
        email: ''
    })

    const handleChange = (e) => {
        setFormData(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('user', JSON.stringify(formData))
}

    
    return <div id="forgottenPasswordSection">
    <img src={AcademyImg} alt="AcademyImg" />
    <h3>Zaboravljena lozinka?</h3>
    <p>Unesi e-mail adresu korišćenu prilikom registracije, 
        a mi ćemo ti poslati instrukcije za kreiranje nove lozinke.</p>

    <form onSubmit={handleSubmit}>
        <label htmlFor="e-mail">
            <h5>E-mail</h5>
            <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder="E-mail adresa" id='e-mail'/>
        </label>
        <button type='submit'>Pošalji</button>
    </form>

    <p>Vrati se na <span 
            onClick={() => setShowLogin(true)}
            style={{cursor: 'pointer'}}
        >Prijavu.</span></p>
    {showLogin && <Login />}
    </div>
}