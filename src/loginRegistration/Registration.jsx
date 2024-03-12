/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import AcademyImg from '../assets/Image//Header Images/academy-logo.png'
import { Login } from './Login';
import { HomePage } from '../pages/HomePage';
import { ConfiredEmail } from './ConfirmedE-mail';
import { ConfirmEmail } from './ConfirmE-mail';

export const Registration = ({onClose}) => {
        const [ showLogin, setShowLogin ] = useState(false);
        const [ formData, setFormData ] =useState({
                name: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
        })
        const [formErrors, setFormErrors] = useState({});
        const [goBackImg, setGoBackImg] = useState(false)
        const [confirmEmail, setConfirmEmail] = useState(false);

        const handleChange = (e) => {
                const {name, value} = e.target;
                setFormData((prev) => ({
                        ...prev,
                        [name]: value
                }))
        }

        const handleSubmit = (e) => {
                e.preventDefault()
                localStorage.setItem('user', JSON.stringify(formData))
                setFormErrors(validate(formData));
                setConfirmEmail(!confirmEmail)
                // setIsSubmit(true)
        }


        const validate = (values) => {
                const errors = {};

                if (values.name.length > 20) {
                        errors.name = 'Ime mora da sadrži najviše 20 znakova alfabeta.'
                }
                if (values.lastName.length > 20) {
                        errors.lastName = 'Prezime mora da sadrži najviše 20 znakova alfabeta.'
                }
                if (!values.email.includes('@')) {
                        errors.email = 'Pogrešan format e-mail adrese.'
                }

                let newVal = values.password.split('');

                // newVal.forEach((letter) => {
                // if (!Number(letter)) {
                //         errors.password = 'Lozinka može da sadrži minimum 8 karaktera, jedno veliko slovo, jedno malo slovo i jedan broj.'
                // }})
                if (values.password.length > 8) {
                        errors.password = 'Lozinka mora da sadrži minimum 8 karaktera, jedno veliko slovo, jedno malo slovo i jedan broj.'   
                }
                if (values.password !== values.confirmPassword) {
                        errors.confirmPassword = 'Lozinke se ne podudaraju.'
        }
                
        return errors
}


    return  <div id="registrationSection">
        <img id='imgId' src={AcademyImg} alt="AcademyImg" onClick={() => setGoBackImg(!goBackImg)}/>
        
        <h3>Registruj se</h3>

        <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                        <h5>Ime*</h5>
                        <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder="Ime" id='name' required/>
                        {formErrors.name && <p className='errorMsg'>{formErrors.name}</p>}
                </label>
                
                <label htmlFor="lastName">
                        <h5>Prezime*</h5>
                        <input type='text' name='lastName' value={formData.lastName} onChange={handleChange} placeholder="Prezime" id='password' required/>
                        {formErrors.lastName && <p className='errorMsg'>{formErrors.lastName}</p>}
                </label>
             
                <label htmlFor="e-mail">
                        <h5>E-mail*</h5>
                        <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder="E-mail adresa" id='e-mail' required/>
                        {formErrors.email && <p className='errorMsg'>{formErrors.email}</p>}
                </label>

                <label htmlFor="password">
                        <h5>Lozinka*</h5>
                        <input type='password' name='password' value={formData.possword} onChange={handleChange} placeholder="Lozinka" id='password' required/>
                        {formErrors.password && <p className='errorMsg'>{formErrors.password}</p>}
                </label>

                <label htmlFor="confirmPassword">
                        <h5>Ponovi Lozinku*</h5>
                        <input type='password' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} placeholder="Ponovi Lozinku" id='confirmPassword' required/>
                        {formErrors.confirmPassword && <p className='errorMsg'>{formErrors.confirmPassword}</p>}
                </label>
                
    <button type='submit'>Registruj se</button>
        
    </form>

    <p>Imaš nalog? <span  
    onClick={() => setShowLogin(!showLogin)}
    style={{cursor: 'pointer'}}
    >Prijavi se.</span></p>
        
        {goBackImg && <HomePage />}
        {confirmEmail && <ConfirmEmail />}
        {showLogin && <Login />}

</div>
}