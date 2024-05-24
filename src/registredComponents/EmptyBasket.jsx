/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import {useMemo } from 'react'
import EmptyBasketImg from '../assets/Image/RegistredImages/BasketImg.png'

export const EmptyBasket = (props) => {


    return <div id="emptyBasketContainer" >
        <div className='emptyBasket'>
            <h3>Tvoja korpa je prazna</h3>
            <img src={EmptyBasketImg} alt="Basket" />
            <p 
            onClick={() => props.goBack(false)}
            style={{cursor: 'pointer'}}

            >Pogledaj ponudu</p>
        </div>
    </div>
};