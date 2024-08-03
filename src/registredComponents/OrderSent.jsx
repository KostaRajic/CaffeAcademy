/* eslint-disable no-undef */
import ReactDOM, { createPortal } from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { useContextAuth } from '../context/ModalContext'
import letterSent from '../assets/Image/RegistredImages/letterSent.png'

export const OrderSent = () => {
    const { setProfileOrder } = useContextAuth()

    const handleBackFromPortal = () => {
        setProfileOrder(false)
    }
    return ReactDOM.createPortal(<div className='successfulNotificationBg'>
        <div className='successfulNotificationClass'>
            <img src={letterSent} alt="Letter" />
            <FontAwesomeIcon icon={faX} className='closeBtn' onClick={handleBackFromPortal}/>
            <p id='orderSentText'>Tvoja narudžbina je poslata!</p>
        </div>
            
    </div>, document.getElementById('orderSent'))
}