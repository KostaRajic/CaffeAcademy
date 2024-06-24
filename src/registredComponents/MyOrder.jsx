/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react'
import beckVector from '../assets/Image/RegistredImages/backVector.png'
import cupOfCoffee from '../assets/Image/Main Section Images/cup-of-coffee.png'
import trash from '../assets/Image/RegistredImages/trash.png'
import minusVector from '../assets/Image/RegistredImages/minusVector.png'
import plusVector from '../assets/Image/RegistredImages/plusVector.png'

export const MyOrder = ({ goBack }) => {

    const myBasket = JSON.parse(localStorage.getItem('items'));

    console.log(myBasket)

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
                
                {myBasket.map((coffee, index) => 
                    <section>
                        <div key={index}>
                            <img 
                            src={cupOfCoffee} 
                            alt='Cup of coffee'
                            className='cupOfCoffeeClass'
                            />
                            <div>
                                <h4>{coffee.coffeeName}</h4>
                                <p>Veličina : {coffee.size[0].toUpperCase()}</p>
                                <p>{coffee.grain ? `Zrno : ${coffee.grain}` : null}</p>
                                <p>{coffee.milk ? `Mleko : ${coffee.milk}` : null}</p>
                            </div>
                            <img src={trash} alt="Trash" />
                            <aside>
                                <img src={plusVector} alt="Plus" />
                                <span>1</span>
                                <img src={minusVector} alt="Minus" />
                            </aside>
                        </div>
                    </section>
                )}
                
                <footer>
                    <div className='totalToPay'>

                    </div>
                    <div className='btns'>

                    </div>
                </footer>
            </div>
        </div>
    </div>
}