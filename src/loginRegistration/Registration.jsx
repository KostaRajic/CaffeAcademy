/* eslint-disable no-unreachable */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { useContext, useEffect, useState } from 'react';
import AcademyImg from '../assets/Image/Header Images/academy-logo.png'
import { ConfirmEmail } from '../loginRegistration/ConfirmE-mail'
import { Login } from '../loginRegistration/Login'
import { useContextAuth } from '../context/ModalContext';

export const Registration = () => {
        const { showModal, setShowModal, showModal2, setShowModal2 } = useContextAuth();
        const [ confirmEmail, setConfirmEmail ] = useState(false);
        const [ showLogin, setShowLogin ] = useState(false)
        const [ formData, setFormData ] = useState({
                name: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
        })
        const [ formErrors, setFormErrors ] = useState({});
        const [ isSubmit, setIsSubmit ] = useState(false)

        const handleChange = (e) => {
                const {name, value} = e.target;
                setFormData((prev) => ({
                        ...prev,
                        [name]: value
                }))
        }

        const handleSubmit = (e) => {
                e.preventDefault()
                setFormErrors(validate(formData))
                if ((Object.keys(formErrors).length === 0 && isSubmit)) {
                        setConfirmEmail(!confirmEmail)
                        localStorage.setItem('user', JSON.stringify(formData))
                }

                setIsSubmit(true)
                
        }

        const handleBack = (e) => {
                setShowModal(false)
                setShowModal2(false);
        }

        const handleCloseRegister = () => {
                setShowLogin(true)
        }


        const confirmEmailGoBack = (e) => {
                e == 'confirmEmail' ? setConfirmEmail(!confirmEmail) : setConfirmEmail(!confirmEmail)
        }

        const validate = (values) => {
                const errors = {};
                
                if (!values.name) { 
                        errors.name = 'Ime je neophodno.'
                } else if (!values.lastName) {
                        errors.lastName = 'Prezime je neophodno.'
                } else if (!values.email) {
                        errors.email = 'E-mail je neophodan.'
                } else if (!values.password) {
                        errors.password = 'Lozinka je neophodna.'
                } else if (!values.confirmPassword) {
                        errors.confirmPassword = 'Lozinka je neophodna.'
                } else if (values.name.length > 20) {
                        errors.name = 'Ime mora da sadrži najviše 20 znakova alfabeta.'
                } else if (values.lastName.length > 20) {
                        errors.lastName = 'Prezime mora da sadrži najviše 20 znakova alfabeta.'
                } else if (values.password.split('').every((e => !/[A-Z]/.test(e)))) {
                        errors.password = 'Lozinka mora da sadrži minimum 8 karaktera, jedno veliko slovo, jedno malo slovo i jedan broj.'
                } else if (values.password.split('').every((e => !/[a-z]/.test(e)))) {
                        errors.password = 'Lozinka mora da sadrži minimum 8 karaktera, jedno veliko slovo, jedno malo slovo i jedan broj.'
                } else if (values.password.split('').map(e => Number(e)).every(e => isNaN(e))) {
                        errors.password = 'Lozinka mora da sadrži minimum 8 karaktera, jedno veliko slovo, jedno malo slovo i jedan broj.'
                } else if (values.password.length < 8) {
                        errors.password = 'Lozinka mora da sadrži minimum 8 karaktera, jedno veliko slovo, jedno malo slovo i jedan broj.'   
                } else if (values.password !== values.confirmPassword) {
                        errors.confirmPassword = 'Lozinke se ne podudaraju.'
        }
        
        return errors    
}

    return  <div id="registrationSection">
        <img 
        id='imgId' 
        src={AcademyImg} 
        alt="AcademyImg"
        onClick={handleBack}
        />

        <h3>Registruj se</h3>

        <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                        <h5>Ime*</h5>
                        <div className='firstDiv'></div>
                        <input type='text' name='name' onChange={handleChange} placeholder="Ime" id='name' />
                </label>
                        {formErrors.name && <p className='errorMsg'>{formErrors.name}</p>}
                <label htmlFor="lastName">
                        <h5>Prezime*</h5>
                        <div className='secondDiv'></div>
                        <input type='text' name='lastName' onChange={handleChange} placeholder="Prezime" id='password' />
                </label>
                        {formErrors.lastName && <p className='errorMsg'>{formErrors.lastName}</p>}
                <label htmlFor="e-mail">
                        <h5>E-mail*</h5>
                        <div className='thirdDiv'></div>
                        <input type='email' name='email' onChange={handleChange} placeholder="E-mail adresa" id='e-mail' />
                </label>
                        {formErrors.email && <p className='errorMsg'>{formErrors.email}</p>}
                <label htmlFor="password">
                        <h5>Lozinka*</h5>
                        <div className='fourthDiv'></div>
                        <input type='text' name='password' onChange={handleChange} placeholder="Lozinka" id='password' />
                </label>
                        {formErrors.password && <p className='errorMsg'>{formErrors.password}</p>}
                <label htmlFor="confirmPassword">
                        <h5>Ponovi Lozinku*</h5>
                        <div className='fifthDiv'></div>
                        <input type='text' name='confirmPassword' onChange={handleChange} placeholder="Ponovi Lozinku" id='confirmPassword' />
                </label>
                        {formErrors.confirmPassword && <p className='errorMsg'>{formErrors.confirmPassword}</p>}
    <button type='submit'>Registruj se</button>
        
    </form>

    <p>Imaš nalog? <span  
        style={{cursor: 'pointer'}}
        onClick={handleCloseRegister}
    >Prijavi se.</span></p>

        { showLogin && <Login /> } 
        { confirmEmail && <ConfirmEmail confirmEmailGoBack={(e) => confirmEmailGoBack(e)}/> }
</div>
}