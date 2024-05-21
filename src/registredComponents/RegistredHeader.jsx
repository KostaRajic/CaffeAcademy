/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
import logo from '../assets/Image/Header Images/academy-logo.png'
import coffeeToGo from '../assets/Image/Header Images/coffee-to-go.png'
import coffeeNumber from '../assets/Image/Header Images/coffee-number.png'
import profilePopUp from '../assets/Image/Header Images/ellipse.png'
import { useEffect, useMemo, useRef, useState } from 'react'
import { EmptyBasket } from './EmptyBasket'

export const RegistredHeader = () => {
    const firstLetter = useRef(null);
    const secondLetter = useRef(null);
    const [ showBasket, setShowBasket ] = useState(false);

    const handleBasket = () => {
        setShowBasket(true)
    }


    const lsUser = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        firstLetter.current.textContent = lsUser.name[0].toUpperCase();
        secondLetter.current.textContent = lsUser.lastName[0].toUpperCase();
    }, [])

    return (
        <header className="header">
            <img src={logo} alt='Academy Logo' />
            <div className='right-side'>
           
                <div className='regIcons'>
                    <img className='reg-profile-img' src={profilePopUp} alt="Profile Circle" />
                    <p className='firstLetter' ref={firstLetter} ></p>
                    <p className='secondLetter' ref={secondLetter} ></p>
                </div>

                <div className='reg-coffee-img' style={{cursor: 'pointer'}}>
                    <img src={coffeeToGo} alt='Coffee to go Logo' onClick={handleBasket}/>
                    {/* <img src={coffeeNumber} alt="Number of coffees" /> */}
                </div>
            </div>
            {showBasket && <EmptyBasket  goBack={b => setShowBasket(b)}/>}
        </header>
    )
}