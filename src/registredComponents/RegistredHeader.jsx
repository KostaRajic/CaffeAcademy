/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
import logo from '../assets/Image/Header Images/academy-logo.png'
import coffeeToGo from '../assets/Image/Header Images/coffee-to-go.png'
import profilePopUp from '../assets/Image/Header Images/ellipse.png'
import ellipse from '../assets/Image/Header Images/ellipse.png'
import timelapse from '../assets/Image/RegistredImages/timelapse.png'
import { useState } from 'react'
import { EmptyBasket } from './EmptyBasket'
import { ProfilePortal } from './ProfilePortal'
import { useContextAuth } from '../context/ModalContext'
import { MyOrder } from './MyOrder'
import { PreparationPhase } from './PreparationPhase'

export const RegistredHeader = () => {
    const [ showBasket, setShowBasket ] = useState(false);
    const { showPopUpProfileIcon, setShowPopUpProfileIcon, sumOfCoffee, showProfileOrder, setProfileOrder, preparingCoffee } = useContextAuth()
    const [ preparationPhase, setPreparationPhase ] = useState(false)

    const handleTurnOffPopUpModal = (state) => {
        state == 'turn-off' ? setShowPopUpProfileIcon(false) : setShowPopUpProfileIcon(true)
    }

    const lsUser = JSON.parse(localStorage.getItem('user'));

    const handleBasket = () => {
        sumOfCoffee && sumOfCoffee > 0 ? setProfileOrder(true) : setShowBasket(true)
    }

    const handleProfilePopUpIcon = () => {
        setShowPopUpProfileIcon(true)
    }

    return (
        <header className="header">
            <img src={logo} alt='Academy Logo' />
            <div className='right-side'>
                { preparingCoffee ? <>
                <img 
                src={timelapse} 
                alt='Time Lapse'
                style={{marginRight: '18px'}}
                onClick={() => setPreparationPhase(true)}
                 />

                <div 
                className='regIcons'
                onClick={handleProfilePopUpIcon}
                >
                    <img 
                    src={profilePopUp} 
                    className='reg-profile-img' 
                    alt="Profile Circle" 
                    />
                    <p className='firstLetter' >
                        {lsUser.name[0].toUpperCase()}
                    </p>
                    <p className='secondLetter'>
                        {lsUser.lastName[0].toUpperCase()}
                    </p>
                    
                </div>

                <div className='reg-coffee-img' style={{cursor: 'pointer'}} onClick={handleBasket}>
                    <img 
                    src={coffeeToGo} 
                    alt='Coffee to go Logo' 
                    />
                    
                    <img 
                    style={ sumOfCoffee <= 10 && sumOfCoffee >= 1 ? {display: 'block'} :  {display: 'none'} }
                    src={ellipse} 
                    alt="Number of coffees"
                    className='ellipse'
                    /> 
                    
                    <p 
                    className='countClass'
                    style={ sumOfCoffee <= 10 && sumOfCoffee >= 1 ? {marginLeft: '-12px'} : {marginLeft: '-15px'} || sumOfCoffee == 10 ? {marginLeft: '-15px'} : '' }  
                    >
                    { sumOfCoffee <= 10 && sumOfCoffee >= 1 ? sumOfCoffee : ''}
                    </p>
                </div>
                </> 
                :
                <>
                <div 
                className='regIcons'
                onClick={handleProfilePopUpIcon}
                >
                    <img 
                    src={profilePopUp} 
                    className='reg-profile-img' 
                    alt="Profile Circle" 
                    />
                    <p className='firstLetter' >
                        {lsUser.name[0].toUpperCase()}
                    </p>
                    <p className='secondLetter'>
                        {lsUser.lastName[0].toUpperCase()}
                    </p>
                </div>

                <div className='reg-coffee-img' style={{cursor: 'pointer'}} onClick={handleBasket}>
                    <img 
                    src={coffeeToGo} 
                    alt='Coffee to go Logo' 
                    
                    />
                    <img 
                    style={ sumOfCoffee <= 10 && sumOfCoffee >= 1 ? {display: 'block'} :  {display: 'none'} }
                    src={ellipse} 
                    alt="Number of coffees"
                    className='ellipse'
                    /> 
                    <p 
                    className='countClass'
                    style={ sumOfCoffee <= 10 && sumOfCoffee >= 1 ? {marginLeft: '-12px'} : {marginLeft: '-15px'} || sumOfCoffee == 10 ? {marginLeft: '-15px'} : '' }  
                    >
                    { sumOfCoffee <= 10 && sumOfCoffee >= 1 ? sumOfCoffee : ''}
                    </p>
                </div>
                </>
                }
            </div>
            { showBasket && <EmptyBasket  goBack={b => setShowBasket(b)}/>}
            { showProfileOrder && <MyOrder goBack={(() => setProfileOrder())}/>}
            { showPopUpProfileIcon && <ProfilePortal clickOutside={handleTurnOffPopUpModal}/>}
            { preparationPhase && <PreparationPhase />}
        </header>
    )
}