import logo from '../assets/Image/Header Images/academy-logo.png'
import profile from '../assets/Image/Header Images/profile.png'
import coffeeToGo from '../assets/Image/Header Images/coffee-to-go.png'
import coffeeNumber from '../assets/Image/Header Images/coffee-number.png'
import { LoginInRegistrationPopUp } from '../loginRegistration/LoginInRegistrationPopUp'
import { useState } from 'react'
import { NotRegistredComp } from '../loginRegistration/NotRegistred'

export const Header = () => {
    const [loginModal, setloginModal] = useState(false);


    return (
        <header className="header">
            <img src={logo} alt='Academy Logo' />
            <div className='right-side'>
                <img onClick={() => {
                    
                    {setloginModal(true) && <NotRegistredComp />}
                }} 
                src={profile} alt='Profile Logo' />
                { loginModal && <LoginInRegistrationPopUp closeModal={setloginModal}/> }
                <div style={{display: 'none'}} className='coffee-img'>
                    <img src={coffeeToGo} alt='Coffee to go Logo' />
                    <img src={coffeeNumber} alt="Number of coffees" />
                </div>
            </div>
        </header>
    )
}