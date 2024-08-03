/* eslint-disable no-undef */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import ReactDOM, { createPortal } from 'react-dom'
import { useContextAuth } from '../context/ModalContext'


export const FullBasket = ({closeModal}) => {
    const { showCoffeeInfo, setShowCoffeeInfo } = useContextAuth()

    const handleBackFromPortal = () => {
        setShowCoffeeInfo(false);
        closeModal(false)
    }
    return ReactDOM.createPortal(<div className='fullBasket'>
    <div className='fullBasketClass'>
        <FontAwesomeIcon icon={faX} className='closeBtn' onClick={handleBackFromPortal}/>
        <p>Moguće je naručiti maksimalno 10 kafa.</p>
    </div>
        
</div>, document.getElementById('fullBasket'))
}