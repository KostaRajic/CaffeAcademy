import logo from '../assets/Image/Header Images/academy-logo.png'
import profile from '../assets/Image/Header Images/profile.png'
import coffeeToGo from '../assets/Image/Header Images/coffee-to-go.png'
import coffeeNumber from '../assets/Image/Header Images/coffee-number.png'
import profilePopUp from '../assets/Image/Header Images/ellipse.png'
import { LoginInRegistrationPopUp } from '../loginRegistration/LoginInRegistrationPopUp'
import { useState } from 'react'

export const RegistredHeader = () => {


    return (
        <header className="header">
            <img src={logo} alt='Academy Logo' />
            <div className='right-side'>
           
                <div className='regIcons'>
                    <img className='reg-profile-img' src={profilePopUp} alt="Profile Circle" />
                    <p className='firstLetter'>K</p>
                    <p className='secondLetter'>R</p>
                </div>

                <div className='reg-coffee-img'>
                    <img src={coffeeToGo} alt='Coffee to go Logo' />
                    {/* <img src={coffeeNumber} alt="Number of coffees" /> */}
                </div>
            </div>
        </header>
    )
}