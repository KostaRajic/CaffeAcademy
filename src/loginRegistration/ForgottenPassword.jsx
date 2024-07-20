/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-empty */
import { useState } from 'react'
import AcademyImg from '../assets/Image//Header Images/academy-logo.png'
import { CreateNewPassword } from '../loginRegistration/CreateNewPassword'
import { useContextAuth } from '../context/ModalContext'

export const ForgottenPassword = ({backFromForgotten}) => {
    const [ createPass, setCreatePass ] = useState(false)
    const [ formData, setFormData ] = useState({
        email: ''
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleBack = () => {
        backFromForgotten('goBack');
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const lsUser = JSON.parse(localStorage.getItem('user'));
        if (lsUser.email === formData.email) {
            setCreatePass(true)
        }
        
}
    
    return <div id="forgottenPasswordSection">
    <img id='imgId' src={AcademyImg} alt="AcademyImg" />
    <h3>Zaboravljena lozinka?</h3>
    <p>Unesi e-mail adresu korišćenu prilikom registracije, 
        a mi ćemo ti poslati instrukcije za kreiranje nove lozinke.</p>

    <form onSubmit={handleSubmit}>
        <label htmlFor="e-mail">
            <h5>E-mail</h5>
            <div></div>
            <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder="E-mail adresa" id='e-mail'/>
        </label>
        <button type='submit'>Pošalji</button>
        
    </form>

    <p className='forgottenPassClass'>Vrati se na <span 
        onClick={handleBack}
        style={{cursor: 'pointer'}}
        >Prijavu.</span></p>
    { createPass && <CreateNewPassword/> }
    
    </div>
}