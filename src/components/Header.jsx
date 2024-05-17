/* eslint-disable no-unused-vars */
import logo from '../assets/Image/Header Images/academy-logo.png'
import profile from '../assets/Image/Header Images/profile.png'
import coffeeToGo from '../assets/Image/Header Images/coffee-to-go.png'
import coffeeNumber from '../assets/Image/Header Images/coffee-number.png'
import { createContext, useContext, useMemo, useState } from 'react'
import { LoginInRegistrationPopUp } from '../loginRegistration/LoginInRegistrationPopUp'
import { useContextAuth } from '../context/ModalContext'

export const Header = () => {

    const [ showModal, setShowModal, showModal2, setShowModal2 ] = useContextAuth(false)

    const handleModal = () => {
        showModal2 ? setShowModal2(false) : setShowModal(true)
    }

    const closeModal = (state) => {
        state === 'zzbz' ? setShowModal(!showModal) : setShowModal(!showModal)
    }

    return <div>
            <header className="header">
                <img src={logo} alt='Academy Logo' />
                <div className='right-side'>
                    <img 
                    src={profile} alt='Profile Logo' onClick={handleModal}
                    />

                    {/* <div style={{display: 'none'}} className='coffee-img'>
                        <img src={coffeeToGo} alt='Coffee to go Logo' />
                        <img src={coffeeNumber} alt="Number of coffees" />
                    </div> */}
                </div>
                
            </header>
            {showModal && <LoginInRegistrationPopUp handleLoginModal={closeModal}/>}

        </div>
}