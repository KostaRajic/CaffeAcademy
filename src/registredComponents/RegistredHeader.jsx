/* eslint-disable react/no-unknown-property */
import logo from '../assets/Image/Header Images/academy-logo.png'
import profile from '../assets/Image/Header Images/profile.png'
import coffeeToGo from '../assets/Image/Header Images/coffee-to-go.png'
import coffeeNumber from '../assets/Image/Header Images/coffee-number.png'
import profilePopUp from '../assets/Image/Header Images/ellipse.png'
import { useEffect, useRef, useState } from 'react'

export const RegistredHeader = () => {
    const firstLetter = useRef(null);
    const secondLetter = useRef(null)

    const lsUser = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        firstLetter.current.textContent = lsUser.name[0].toUpperCase();
        secondLetter.current.textContent = lsUser.lastName[0].toUpperCase();
    }, [])

    useEffect(() => {
        
    },[])

    return (
        <header className="header">
            <img src={logo} alt='Academy Logo' />
            <div className='right-side'>
           
                <div className='regIcons'>
                    <img className='reg-profile-img' src={profilePopUp} alt="Profile Circle" />
                    <p className='firstLetter' ref={firstLetter} ></p>
                    <p className='secondLetter' ref={secondLetter} ></p>
                </div>

                <div className='reg-coffee-img'>
                    <img src={coffeeToGo} alt='Coffee to go Logo' />
                    {/* <img src={coffeeNumber} alt="Number of coffees" /> */}
                </div>
            </div>
        </header>
    )
}