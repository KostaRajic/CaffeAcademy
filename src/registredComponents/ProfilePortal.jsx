/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */

import { createPortal } from "react-dom"
import { useContextAuth } from "../context/ModalContext";
import { useEffect, useRef, useState } from "react";
import { Profile } from "./ProfileComponent";

export const ProfilePortal = ({clickOutside}) => {
    const { showModal, setShowModal, showModal2, setShowModal2, isLoggedIn, setIsLoggedIn, showPopUpProfileIcon, setShowPopUpProfileIcon } = useContextAuth()
    const refMethod = useRef(null);
    const [ showProfile, setShowProfile ] = useState(false)

    const handleProfile = () => {
        setShowProfile(!showProfile)
    }

    const tryFunction = () => {
        clickOutside('turn-off')
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);

    return (() => {
        document.removeEventListener('click', handleClickOutside, true);
        })
    },[showProfile])

    const handleClickOutside = (e) => {
        if(!showProfile && !refMethod?.current?.contains(e.target)) {
            tryFunction()
        }
    }

    const handleBack = () => {
        setIsLoggedIn(!isLoggedIn)
        setShowModal(false)
        setShowModal2(false)
        setShowPopUpProfileIcon(false)
    }

    return createPortal(<div className="loginPopUpModalBackground">
    <div className="profileLoginPopUpModal" ref={refMethod}>
        <button 
        className="myProfile"
        onClick={handleProfile}
        >MOJ PROFIL</button>
        <button 
        className="logOut"
        onClick={handleBack}
        >ODJAVA</button>
        
    </div>
    { showProfile && <Profile />}
    </div> 
    
    , document.getElementById('profile'))
    
}