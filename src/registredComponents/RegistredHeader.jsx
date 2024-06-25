/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
import logo from '../assets/Image/Header Images/academy-logo.png'
import coffeeToGo from '../assets/Image/Header Images/coffee-to-go.png'
import coffeeNumber from '../assets/Image/Header Images/coffee-number.png'
import profilePopUp from '../assets/Image/Header Images/ellipse.png'
import ellipse from '../assets/Image/Header Images/ellipse.png'
import { useEffect, useMemo, useRef, useState } from 'react'
import { EmptyBasket } from './EmptyBasket'
import { ProfilePortal } from './ProfilePortal'
import { useContextAuth } from '../context/ModalContext'
import { MyOrder } from './MyOrder'

export const RegistredHeader = () => {
    const firstLetter = useRef(null);
    const secondLetter = useRef(null);
    const [ showBasket, setShowBasket ] = useState(false);
    const { showPopUpProfileIcon, setShowPopUpProfileIcon } = useContextAuth()
    let { coffeeBasket, setCoffeeBasket } = useContextAuth(0);
    let { count } = useContextAuth()
    const [ showProfileOrder, setProfileOrder ] = useState(false)
    let [ coffeeItems, setCoffeeItems ] = useState({})

    const handleTurnOffPopUpModal = (state) => {
        state == 'turn-off' ? setShowPopUpProfileIcon(false) : setShowPopUpProfileIcon(true)
    }


    useEffect(() => {
        setCoffeeItems(coffeeItems ? JSON.parse(localStorage.getItem('items')) : {})
    }, [])

    const lsUser = JSON.parse(localStorage.getItem('user'));

    const handleBasket = () => {
        coffeeItems && coffeeItems.length > 0 ? setProfileOrder(true) : setShowBasket(true)
    }

    const handleProfilePopUpIcon = () => {
        setShowPopUpProfileIcon(true)
    }

    useEffect(() => {
        firstLetter.current.textContent = lsUser.name[0].toUpperCase();
        secondLetter.current.textContent = lsUser.lastName[0].toUpperCase();
    }, [])

    return (
        <header className="header">
            <img src={logo} alt='Academy Logo' />
            <div className='right-side'>
         
                <div 
                className='regIcons'
                onClick={handleProfilePopUpIcon}
                >
                    <img 
                    src={profilePopUp} 
                    className='reg-profile-img' 
                    alt="Profile Circle" 
                    />
                    <p className='firstLetter' ref={firstLetter} ></p>
                    <p className='secondLetter' ref={secondLetter} ></p>
                </div>

                <div className='reg-coffee-img' style={{cursor: 'pointer'}}>
                    <img 
                    src={coffeeToGo} 
                    alt='Coffee to go Logo' 
                    onClick={handleBasket}
                    />
                    <img 
                    style={ coffeeItems ? {display: 'block'} :  {display: 'none'}}
                    src={ellipse} 
                    alt="Number of coffees"
                    className='ellipse'
                    /> 
                    <p 
                    className='countClass'
                    style={ coffeeItems && coffeeItems.length < 1 ? {display: 'none'} : {display: 'block'} ||
                    coffeeItems && coffeeItems.length >= 1 && coffeeItems.length < 10 ? {marginLeft: '-12px'} : {marginLeft: '-14px'}} 
                    >
                    {coffeeItems ? coffeeItems.length : ''}</p>
                </div>
            </div>
            { showBasket && <EmptyBasket  goBack={b => setShowBasket(b)}/>}
            { showProfileOrder && <MyOrder goBack={(() => setProfileOrder())}/>}
            { showPopUpProfileIcon && <ProfilePortal clickOutside={handleTurnOffPopUpModal}/>}
        </header>
    )
}