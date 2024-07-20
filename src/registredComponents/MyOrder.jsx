/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { Fragment, useEffect, useState } from 'react'
import beckVector from '../assets/Image/RegistredImages/backVector.png'
import cupOfCoffee from '../assets/Image/Main Section Images/cup-of-coffee.png'
import trash from '../assets/Image/RegistredImages/trash.png'
import minusVector from '../assets/Image/RegistredImages/minusVector.png'
import plusVector from '../assets/Image/RegistredImages/plusVector.png'
import { useContextAuth } from '../context/ModalContext'

export const MyOrder = ({ goBack }) => {
    const { basket, setBasket } = useContextAuth()

    const handleDeleteItem = (id) => {
        setBasket(oldBasket => oldBasket?.filter(item => item.id !== id))
    }

    return <div className="myOrderComponent">
        <header className="headerClass">
            <img 
            src={beckVector} 
            alt="Back vector"
            onClick={() => goBack(false)}
            />
            Moja Narudžbina
        </header>
        <div className="myOrderClass">
            <div className='myOrderBackground'>

            {basket?.map((coffee, index) => 
                <section>
                    <div key={index}>
                        <img
                            src={cupOfCoffee}
                            alt='Cup of coffee'
                            className='cupOfCoffeeClass' />
                        <div key={index}>
                            <h4>{coffee.coffeeName}</h4>
                            <p>Veličina : {coffee.size[0].toUpperCase()}</p>
                            <p>{coffee.grain ? `Zrno : ${coffee.grain}` : null}</p>
                            <p>{coffee.milk ? `Mleko : ${coffee.milk}` : null}</p>
                        </div>
                        <img 
                        onClick={() => handleDeleteItem(coffee.id)}
                        src={trash} 
                        alt="Trash" />
                        <aside>
                            <img src={plusVector} alt="Plus" />
                            <span>
                                {coffee.count > 1 ? coffee.count : 1}
                            </span>
                            <img src={minusVector} alt="Minus" />
                        </aside>
                    </div>
                </section>
                
            )}
                <footer>
                        <div className='totalToPay'>
                            Ukupno za plaćanje: <span>
                                {/* {basket?.reduce((acc, curr) => acc.count + curr.count)} */}
                            </span>
                        </div>
                        <div className='btns'>

                        </div>
                </footer>
                    
                
            </div>
        </div>
    </div>
}