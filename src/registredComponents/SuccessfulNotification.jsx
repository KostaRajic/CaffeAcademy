/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactDOM, { createPortal } from 'react-dom'
import { faThumbsUp, faX } from '@fortawesome/free-solid-svg-icons'
import { Children } from 'react'
import { useContextAuth } from '../context/ModalContext'



export const SuccessfulNotificationPortal = ({closeModal}) => {
    const { showCoffeeInfo, setShowCoffeeInfo } = useContextAuth()

    const handleBackFromPortal = () => {
        setShowCoffeeInfo(false);
    }

    return ReactDOM.createPortal(<div className='successfulNotificationBg'>
    <div className='successfulNotificationClass'>
        <FontAwesomeIcon icon={faThumbsUp} className='okClass'/>
        <FontAwesomeIcon icon={faX} className='closeBtn' onClick={handleBackFromPortal}/>
        <p>Proizvod uspešno dodat u korpu.</p>
    </div>
        
</div>, document.getElementById('notification'))

}