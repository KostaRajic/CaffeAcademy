/* eslint-disable no-unreachable */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import background from '../assets/Image/RegistredImages/CoffeeBackground.jpg'
import ellipse from '../assets/Image/Header Images/ellipse.png'
import cancel from '../assets/Image/RegistredImages/cancel.png'
import editBtn from '../assets/Image/RegistredImages/editBtn.png'
import { useEffect, useRef, useState } from 'react'
import { useContextAuth } from '../context/ModalContext'

export const Profile = () => {
    const [ user, setUser ] = useState(() => {
        return JSON.parse(localStorage.getItem('user'));
    });
    const [ enableInput1, setEnableInput1 ] = useState(true);
    const [ enableInput2, setEnableInput2 ] = useState(true);
    const [ enableInput3, setEnableInput3 ] = useState(true);
    const nameFocus = useRef(null);
    const lastNameFocus = useRef(null);
    const emailFocus = useRef(null);
    const { setShowPopUpProfileIcon } = useContextAuth();
    let { coffeeBasket, setCoffeeBasket } = useContextAuth();
    const [ coffeeCups, setCofffeeCups ] = useState(10);
    const orderHistory = useRef(null)


    const handleEditClick = (e) => {
        if (e.target.alt === 'Edit1') {
            nameFocus.current.focus();
            setEnableInput1(!enableInput1)
        } else if (e.target.alt === 'Edit2') {
            lastNameFocus.current.focus();
            setEnableInput2(!enableInput2)
        } else if (e.target.alt === 'Edit3') {
            emailFocus.current.focus();
            setEnableInput3(!enableInput3)
        }
      };


    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
}, [user])

    const coffeeItems = JSON.parse(localStorage.getItem('items'));

    return <div 
        className='profileBackground'
        style={
            {backgroundImage: `url(${background})`}}
            >
        <div className="profileClass">
                <header className='profileHeaderContainer'>
                    <img src={ellipse} alt="Ellipse" />
                    <p className='profileFirstLetter'>K</p>
                    <p className='profileSecondLetter'>R</p>
                    <h3>{user.name} {user.lastName}</h3>
                    <img 
                    src={cancel} 
                    alt="cancel"
                    onClick={() => setShowPopUpProfileIcon(false)} />
                </header>

                <form>
                    <input 
                    value={user.name} 
                    onChange={handleChange}
                    name='name'
                    ref={nameFocus}
                    readOnly={enableInput1}
                    /> 
                        <span>Ime</span>
                        <p></p>
                        <img 
                        src={editBtn} 
                        alt="Edit1"
                        
                        onClick={handleEditClick} />

                    <input 
                    value={user.lastName} 
                    onChange={handleChange}
                    name='lastName'
                    ref={lastNameFocus}
                    readOnly={enableInput2}
                    />

                        <span>Prezime</span>
                        <p></p>
                        <img 
                        src={editBtn} 
                        alt="Edit2"
                        onClick={handleEditClick}
                         />
                    
                    <input 
                    value={user.email} 
                    onChange={handleChange}
                    name='email'
                    ref={emailFocus}
                    readOnly={enableInput3}
                    /> 
                        <span>E-mail</span>
                        <p></p>
                        <img 
                        src={editBtn} 
                        alt="Edit3"
                        onClick={handleEditClick}
                         />

                </form>

                <section className='coffeeToGo'>
                    <p><span>{coffeeBasket}</span>/<span>10</span></p>
                    <div>
                    { [...Array(coffeeCups)].map((cup, index) => {
                        index += 1
 
                        return  <div key={index}>
                            <img 
                        key={index}
                        src={coffeeToGo}
                        alt="Coffee to go"
                        style={ coffeeBasket < index ? {opacity: '40%'} : {opacity: '100%'}} 
                        />
                        </div>
                    })}
                    </div>
                </section>

                <section className='orderHistory'>
                    <h4>Istorija narudžbina</h4>
                    <div>
                        {coffeeItems.map(coffee => 
                                <p>{coffee.date} {coffee.coffeeName}</p>
                        )}
                    </div>
                </section>
        </div>
    </div>

}