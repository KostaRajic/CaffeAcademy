/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import AcademyImg from '../assets/Image//Header Images/academy-logo.png'
import { Login } from './Login';

export const Registration = () => {
        const [ showLogin, setShowLogin ] = useState(false);
        const [ formData, setFormData ] =useState({
                name: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
        })
        const [formErrors, setFormErrors] = useState({})
        const [isSubmit, setIsSubmit] = useState(false)

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
                setIsSubmit(true)
        }

        useEffect(() => {
                if( Object.keys(formErrors).length === 0 && isSubmit) {
                        console.log(formData)
                }
        }, [formErrors])

        const validate = (values) => {
                const errors = {};

                if (values.name.length > 20) {
                        errors.name = 'Ime može da sadrži najviše 20 znakova alfabeta.'
                }
                if (values.lastName.length > 20) {
                        errors.lastName = 'Prezime može da sadrži najviše 20 znakova alfabeta.'
                }
                if (!values.email.includes('@')) {
                        errors.email = 'Pogrešan format e-mail adrese.'
                }
                if (values.password.length > 8 && values.password.toUpperCase().length < 1 && values.password.toLowerCase().length < 1 && typeof(values.password.value) !== 'number') {
                        errors.password = 'Lozinka može da sadrži minimum 8 karaktera, jedno veliko slovo, jedno malo slovo i jedan broj.'   
                }
                if (values.password !== values.confirmPassword) {
                        errors.confirmPassword = 'Lozinke se ne podudaraju.'
        }
                
        return errors
}


    return  <div id="registrationSection">
        <img src={AcademyImg} alt="AcademyImg" />
        <h3>Registruj se</h3>
        
        <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                        <h5>Ime*</h5>
                        <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder="Ime" id='name' required/>
                        <p className='errorMsg'>{formErrors.name}</p>
                </label>
                
                <label htmlFor="lastName">
                        <h5>Prezime*</h5>
                        <input type='text' name='lastName' value={formData.lastName} onChange={handleChange} placeholder="Prezime" id='password' required/>
                        <p className='errorMsg'>{formErrors.lastName}</p>
                </label>
             
                <label htmlFor="e-mail">
                        <h5>E-mail*</h5>
                        <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder="E-mail adresa" id='e-mail' required/>
                        <p className='errorMsg'>{formErrors.email}</p>
                </label>

                <label htmlFor="password">
                        <h5>Lozinka*</h5>
                        <input type='password' name='password' value={formData.possword} onChange={handleChange} placeholder="Lozinka" id='password' required/>
                        <p className='errorMsg'>{formErrors.password}</p>
                </label>

                <label htmlFor="confirmPassword">
                        <h5>Ponovi Lozinku*</h5>
                        <input type='password' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} placeholder="Ponovi Lozinku" id='confirmPassword' required/>
                        <p className='errorMsg'>{formErrors.confirmPassword}</p>
                </label>
        
    <button type='submit'>Registruj se</button>

    </form>

    <p>Imaš nalog? <span  
    onClick={() => setShowLogin(true)}
    style={{cursor: 'pointer'}}
    >Prijavi se.</span></p>

    {showLogin && <Login />}
</div>
}