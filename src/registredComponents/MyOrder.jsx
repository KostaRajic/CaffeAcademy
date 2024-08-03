/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { Fragment, useEffect, useState } from 'react'
import beckVector from '../assets/Image/RegistredImages/backVector.png'
import cupOfCoffee from '../assets/Image/Main Section Images/cup-of-coffee.png'
import trash from '../assets/Image/RegistredImages/trash.png'
import minusVector from '../assets/Image/RegistredImages/minusVector.png'
import plusVector from '../assets/Image/RegistredImages/plusVector.png'
import { useContextAuth } from '../context/ModalContext'
import { FullBasket } from './FullBasket'
import { coffeeArr } from '../fileWithCoffee/Coffee.js';
import { OrderSent } from './OrderSent.jsx'

export const MyOrder = ({ goBack }) => {
    const { basket, setBasket, sumOfCoffee, setProfileOrder, preparingCoffee, setPreparingCoffee } = useContextAuth();
    const [ count, setCount ] = useState(sumOfCoffee);
    const [ fullBasket, setFullBasket ] = useState(false);


    useEffect(() => {
        if (count > 11) {
            setCount(count - 2)
        }
    }, [count])

    const handleDeleteItem = (id) => {
        setBasket(oldBasket => oldBasket?.filter(item => item.id !== id))
    }

    const handlePlusItem = (id) => {
        if ( count > 10) {
            setFullBasket(true)
        }
        setCount((prev) => prev + 1)
        if (sumOfCoffee > 1 && sumOfCoffee < 10) {
            setBasket((prevBasket) => 
                prevBasket.map((item) =>
                  item.id === id ? { ...item, count: item.count + 1 } : item
                ))
            }
  
        }

    const handleMinusItem = (id) => {
        if (count > 1 && sumOfCoffee > 1) {
            setCount((prev) => prev - 1)
        }
        
        if (sumOfCoffee > 1) {
            setBasket((prevBasket) => 
            prevBasket.map((item) =>
                item.id === id ? { ...item, count: item.count - 1 } : item
            ))
            }
        }

    const handleCancelButton = () => {
        setBasket([]);
        setProfileOrder(false)
    }


    return <div className="myOrderComponent" >
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
                            <img 
                            src={plusVector} 
                            alt="Plus"
                            onClick={() => handlePlusItem(coffee.id)}
                            />
                            <span>
                                {coffee.count > 1 ? coffee.count : 1}
                            </span>
                            <img 
                            src={minusVector}
                            alt="Minus"
                            onClick={() => handleMinusItem(coffee.id)}
                            />
                        </aside>
                    </div>
                </section>
            )}
                    
                <footer>
                    <div className='totalToPay'>
                        Ukupno za plaćanje: <span>
                        {basket?.reduce((accumulator, currentValue) => {
                            return accumulator + currentValue?.price
                            }, 0)}
                        </span>
                    </div>
                    <div className='btns'>
                        <button type='button' onClick={() => setPreparingCoffee(true)}>NARUČI</button>
                        <button type='button' onClick={handleCancelButton}>Otkaži</button>
                    </div>
                </footer>   
            </div>
        </div>
        { preparingCoffee && <OrderSent />}
        { fullBasket && <FullBasket closeModal={() => setFullBasket()}/>}
    </div>
}