/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-empty */
import { useState } from 'react'
import AcademyImg from '../assets/Image//Header Images/academy-logo.png'
import { Login } from './Login';
import { CreateNewPassword } from './CreateNewPassword';

export const ForgottenPassword = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [formData, setFormData] = useState({
        email: ''
    });
    const [createPass, setCreatePass] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const lsUser = JSON.parse(localStorage.getItem('user'));
        if (lsUser.email === formData.email) {
            setCreatePass(true)
        }
        console.log(lsUser)
        
}

    
    return <div id="forgottenPasswordSection">
    <img src={AcademyImg} alt="AcademyImg" />
    <h3>Zaboravljena lozinka?</h3>
    <p>Unesi e-mail adresu korišćenu prilikom registracije, 
        a mi ćemo ti poslati instrukcije za kreiranje nove lozinke.</p>

    <form onSubmit={handleSubmit}>
    {createPass && <CreateNewPassword />}
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