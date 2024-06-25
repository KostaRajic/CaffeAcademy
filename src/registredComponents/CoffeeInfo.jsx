/* eslint-disable no-cond-assign */
/* eslint-disable no-constant-condition */
/* eslint-disable no-const-assign */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-else-if */
/* eslint-disable no-unreachable */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useEffect, useMemo, useRef, useState } from 'react'
import cupOfCoffee from '../assets/Image/Main Section Images/cup-of-coffee.png'
import coffeeGrain from '../assets/Image/RegistredImages/coffee-grain.png'
import milk from '../assets/Image/RegistredImages/milk.png';
import beckVector from '../assets/Image/RegistredImages/backVector.png'
import { SuccessfulNotificationPortal } from './SuccessfulNotification'
import { useContextAuth } from '../context/ModalContext';
import { setNewDate } from '../date/date.js'


export const CoffeeInfo = ({ coffeeName, closeCoffeeInfo }) => {
    const [ addToBasket, setAddToBasket ] = useState(false);
    const [ coffee, setCoffee ] = useState(
        {
        size: '',
        grain: '',
        milk: '',
    });
    const smallCoffeePrice = useRef(0);
    const mediumCoffeePrice = useRef(0);
    const largeCoffeePrice = useRef(0);
    let { count, setCount, coffeeBasket, setCoffeeBasket } = useContextAuth();
    const [ date, setDate ] = useState(new Date())
    const [ basket, setBasket ] = useState(() => {
        const savedItems = localStorage.getItem('items');
        return savedItems ? JSON.parse(savedItems) : [];
    })

    useEffect(() => {
        setCount(1);
    },[])
    
    console.log(basket)

    const handleChange = (e) => {
        const { name, value } = e.target;
            setCoffee((prev) => (
                {
                ...prev,
                [name]: value
            }))
        }

        const handleMinusCount = () => {
        setCount(prev => prev - 1)
        if (count == 1) {
            setCount(1)
            
        } else if ( count == 2) {
            setCoffeeBasket(prev => prev - 2)
        }
        else if ( coffeeBasket >= 1) {
        setCoffeeBasket(prev => prev - 1)
        }
    }

        const handlePlusCount = () => {
            if (coffeeBasket <= 9) { 
            
                setCount(prev => prev + 1)
                
                if (count == 1) {
                    setCoffeeBasket(prev => prev + 2)
                } else setCoffeeBasket(prev => prev + 1)
            }
    }
    
    localStorage.setItem('items', JSON.stringify(basket));

    const handleSubmit = (e) => {
        e.preventDefault();

        
        if (coffeeName == 'Topla čokolada' && coffee.size !== '' && coffee.milk !== '') {
            setAddToBasket(true)
            setBasket([...basket, {...coffee, coffeeName: coffeeName, date: setNewDate(date)}])
            if ( count == 1) {
                setCoffeeBasket(++coffeeBasket) 
            }  
        } 
        else if (coffeeName == 'Esspreso kratki' && 
        coffee.size !== '' && 
        coffee.grain !== '') {
            setAddToBasket(true)
            setBasket([...basket, {...coffee, coffeeName: coffeeName, date: setNewDate(date)}])
            if ( count == 1) {
            setCoffeeBasket(++coffeeBasket)
            }
        } 
        else if (coffeeName == 'Esspreso dugi' && 
        coffee.size !== '' && 
        coffee.grain !== '') {
            setAddToBasket(true)
            setBasket([...basket, {...coffee, coffeeName: coffeeName, date: setNewDate(date)}])
            if ( count == 1) {
                setCoffeeBasket(++coffeeBasket) 
            } 
        } 
        else if (coffeeName == 'Americano' && 
        coffee.size !== '' && 
        coffee.grain !== '') {
            setAddToBasket(true)
            setBasket([...basket, {...coffee, coffeeName: coffeeName, date: setNewDate(date)}])
            if ( count == 1) {
                setCoffeeBasket(++coffeeBasket) 
            } 
        } 
        else if (coffeeName == 'Lungo Ristretto' && 
        coffee.size !== '' && 
        coffee.grain !== '') {
            setAddToBasket(true)
            setBasket([...basket, {...coffee, coffeeName: coffeeName, date: setNewDate(date)}])
            if ( count == 1) {
                setCoffeeBasket(++coffeeBasket) 
            } 
        } 
        else if (coffeeName == 'Affogato' && 
        coffee.size !== '' && 
        coffee.grain !== '') {
            setAddToBasket(true)
            setBasket([...basket, {...coffee, coffeeName: coffeeName, date: setNewDate(date)}])
            if ( count == 1) {
                setCoffeeBasket(++coffeeBasket) 
            } 
        } 
        else if (coffeeName == 'Affogato sa sladoledom' && 
        coffee.size !== '' && 
        coffee.grain !== '') {
            setAddToBasket(true)
            setBasket([...basket, {...coffee, coffeeName: coffeeName, date: setNewDate(date)}])
            if ( count == 1) {
                setCoffeeBasket(++coffeeBasket) 
            } 
        } 
        else if (coffeeName == 'Turkish Coffee' && 
        coffee.size !== '' && 
        coffee.grain !== '') {
            setAddToBasket(true)
            setBasket([...basket, {...coffee, coffeeName: coffeeName, date: setNewDate(date)}])
            if ( count == 1) {
                setCoffeeBasket(++coffeeBasket) 
            } 
        } 
        else if (coffeeName == 'Cold Brew' && 
        coffee.size !== '' && 
        coffee.grain !== '') {
            setAddToBasket(true)
            setBasket([...basket, {...coffee, coffeeName: coffeeName, date: setNewDate(date)}])
            if ( count == 1) {
                setCoffeeBasket(++coffeeBasket) 
            } 
        } 
        else if (coffeeName == 'Ice Coffee' && 
        coffee.size !== '' && 
        coffee.grain !== '') {
            setAddToBasket(true)
            setBasket([...basket, {...coffee, coffeeName: coffeeName, date: setNewDate(date)}])
            if ( count == 1) {
                setCoffeeBasket(++coffeeBasket) 
            } 
        } 
        else if (coffeeName == 'Ice Coffee sa sladoledom' && 
        coffee.size !== '' && 
        coffee.grain !== '') {
            setAddToBasket(true)
            setBasket([...basket, {...coffee, coffeeName: coffeeName, date: setNewDate(date)}])
            if ( count == 1) {
                setCoffeeBasket(++coffeeBasket) 
            } 
        } 
        else if (coffee.size !== '' && coffee.grain !== '' && coffee.milk !== '') {
            setAddToBasket(true)
            setBasket([...basket, {...coffee, coffeeName: coffeeName, date: setNewDate(date)}])
            if ( count == 1) {
                setCoffeeBasket(++coffeeBasket) 
            }  
            
    }
    }

    useEffect(() => {
        if (coffeeName == 'Esspreso kratki  sa mlekom') {
            smallCoffeePrice.current.innerText = '160,00 din';
            mediumCoffeePrice.current.innerText = '170,00 din';
            largeCoffeePrice.current.innerText = '180,00 din';
        } else if (coffeeName == 'Esspreso dugi') {
            smallCoffeePrice.current.innerText = '160,00 din';
            mediumCoffeePrice.current.innerText = '170,00 din';
            largeCoffeePrice.current.innerText = '180,00 din';
        } else if (coffeeName == 'Esspreso dugi sa mlekom') {
            smallCoffeePrice.current.innerText = '180,00 din';
            mediumCoffeePrice.current.innerText = '190,00 din';
            largeCoffeePrice.current.innerText = '200,00 din';
        } else if (coffeeName == 'Americano') {
            smallCoffeePrice.current.innerText = '170,00 din';
            mediumCoffeePrice.current.innerText = '180,00 din';
            largeCoffeePrice.current.innerText = '190,00 din';
        } else if (coffeeName == 'Americano  sa mlekom') {
            smallCoffeePrice.current.innerText = '190,00 din';
            mediumCoffeePrice.current.innerText = '200,00 din';
            largeCoffeePrice.current.innerText = '210,00 din';
        } else if (coffeeName == 'Macchiato') {
            smallCoffeePrice.current.innerText = '140,00 din';
            mediumCoffeePrice.current.innerText = '150,00 din';
            largeCoffeePrice.current.innerText = '160,00 din';
        } else if (coffeeName == 'Espresso  Macchiato') {
            smallCoffeePrice.current.innerText = '170,00 din';
            mediumCoffeePrice.current.innerText = '180,00 din';
            largeCoffeePrice.current.innerText = '190,00 din';
        } else if (coffeeName == 'Cappuccino') {
            smallCoffeePrice.current.innerText = '200,00 din';
            mediumCoffeePrice.current.innerText = '210,00 din';
            largeCoffeePrice.current.innerText = '220,00 din';
        } else if (coffeeName == 'Latte') {
            smallCoffeePrice.current.innerText = '210,00 din';
            mediumCoffeePrice.current.innerText = '220,00 din';
            largeCoffeePrice.current.innerText = '230,00 din';
        } else if (coffeeName == 'Mocha  Bela Čokolada') {
            smallCoffeePrice.current.innerText = '220,00 din';
            mediumCoffeePrice.current.innerText = '230,00 din';
            largeCoffeePrice.current.innerText = '240,00 din';
        } else if (coffeeName == 'Mocha Crna Čokolada') {
            smallCoffeePrice.current.innerText = '220,00 din';
            mediumCoffeePrice.current.innerText = '230,00 din';
            largeCoffeePrice.current.innerText = '240,00 din';
        } else if (coffeeName == 'Mocha Lešnik') {
            smallCoffeePrice.current.innerText = '220,00 din';
            mediumCoffeePrice.current.innerText = '230,00 din';
            largeCoffeePrice.current.innerText = '240,00 din';
        } else if (coffeeName == 'Flat White') {
            smallCoffeePrice.current.innerText = '230,00 din';
            mediumCoffeePrice.current.innerText = '240,00 din';
            largeCoffeePrice.current.innerText = '250,00 din';
        } else if (coffeeName == 'Lungo Ristretto') {
            smallCoffeePrice.current.innerText = '200,00 din';
            mediumCoffeePrice.current.innerText = '210,00 din';
            largeCoffeePrice.current.innerText = '220,00 din';
        } else if (coffeeName == 'Affogato') {
            smallCoffeePrice.current.innerText = '200,00 din';
            mediumCoffeePrice.current.innerText = '210,00 din';
            largeCoffeePrice.current.innerText = '220,00 din';
        } else if (coffeeName == 'Affogato sa sladoledom') {
            smallCoffeePrice.current.innerText = '230,00 din';
            mediumCoffeePrice.current.innerText = '240,00 din';
            largeCoffeePrice.current.innerText = '250,00 din';
        } else if (coffeeName == 'Frappuccino') {
            smallCoffeePrice.current.innerText = '250,00 din';
            mediumCoffeePrice.current.innerText = '260,00 din';
            largeCoffeePrice.current.innerText = '270,00 din';
        } else if (coffeeName == 'Turkish Coffee') {
            smallCoffeePrice.current.innerText = '110,00 din';
            mediumCoffeePrice.current.innerText = '120,00 din';
            largeCoffeePrice.current.innerText = '130,00 din';
        } else if (coffeeName == 'Turkish Coffee sa mlekom') {
            smallCoffeePrice.current.innerText = '120,00 din';
            mediumCoffeePrice.current.innerText = '130,00 din';
            largeCoffeePrice.current.innerText = '140,00 din';
        } else if (coffeeName == 'Cold Brew') {
            smallCoffeePrice.current.innerText = '230,00 din';
            mediumCoffeePrice.current.innerText = '240,00 din';
            largeCoffeePrice.current.innerText = '250,00 din';
        } else if (coffeeName == 'Cold Brew sa mlekom') {
            smallCoffeePrice.current.innerText = '250,00 din';
            mediumCoffeePrice.current.innerText = '260,00 din';
            largeCoffeePrice.current.innerText = '270,00 din';
        } else if (coffeeName == 'Ice Coffee') {
            smallCoffeePrice.current.innerText = '230,00 din';
            mediumCoffeePrice.current.innerText = '240,00 din';
            largeCoffeePrice.current.innerText = '250,00 din';
        } else if (coffeeName == 'Ice Coffee sa sladoledom') {
            smallCoffeePrice.current.innerText = '270,00 din';
            mediumCoffeePrice.current.innerText = '280,00 din';
            largeCoffeePrice.current.innerText = '290,00 din';
        } else if (coffeeName == 'Ice Coffee sa mlekom') {
            smallCoffeePrice.current.innerText = '250,00 din';
            mediumCoffeePrice.current.innerText = '260,00 din';
            largeCoffeePrice.current.innerText = '270,00 din';
        } else if (coffeeName == 'Topla čokolada') {
            smallCoffeePrice.current.innerText = '280,00 din';
            mediumCoffeePrice.current.innerText = '290,00 din';
            largeCoffeePrice.current.innerText = '300,00 din';
        } 
    }, [coffeeName])
    

    const handleClose = () => {
        closeCoffeeInfo(false)
        if (count > 1)  {            
        setCoffeeBasket(coffeeBasket - count)
    }
}


    return <div id='coffeeInfoContainer'>
    <header className="headerClass">
        <img src={beckVector} alt="Back vector" onClick={() => closeCoffeeInfo(false)}/>
        Narudžbina
    </header>
    <div className='coffee-info'>
        <form className="imgColor" onSubmit={handleSubmit}>
                <div id='chosenCoffee'>
                    <img src={cupOfCoffee} alt="Cup of Coffee" />
                    <h3>{coffeeName}</h3>
                </div>
                <h4>Izaberi veličinu</h4>
                <div className='coffeeSize'>
                    <div className='small'>
                        <label htmlFor="smallCup" style={coffee.size == 'small' ? {backgroundColor: 'yellow'} : {backgroundColor: 'white'}}>
                            <input 
                            id='smallCup'
                            type='radio' 
                            name='size' 
                            value='small'
                            onChange={handleChange}
                            />
                            <img src={cupOfCoffee} alt="Cup of Coffee" />
                            <span>S</span>
                        </label>
                        <p ref={smallCoffeePrice}>130,00 din</p>
                    </div>
                    
                    <div className='medium'>
                        <label 
                        htmlFor="mediumCup" 
                        style={coffee.size == 'medium' ? {backgroundColor: 'yellow'} : {backgroundColor: 'white'}}> 
                            <input 
                            id='mediumCup' 
                            type='radio' 
                            name='size' 
                            value='medium'
                            onChange={handleChange}
                            />
                            <img src={cupOfCoffee} alt="Cup of Coffee" />
                            <span>M</span>
                        </label>
                        <p ref={mediumCoffeePrice}>140,00 din</p>
                    </div>
                
                    <div className='large'>
                        <label 
                        htmlFor="largeCup" 
                        style={coffee.size  == 'large' ? {backgroundColor: 'yellow'} : {backgroundColor: 'white'}}>
                            <input 
                            id='largeCup' 
                            type='radio' 
                            name='size' 
                            value='large'
                            onChange={handleChange}
                            />
                            <img src={cupOfCoffee} alt="Cup of Coffee" />
                            <span>L</span>
                        </label>
                        <p ref={largeCoffeePrice}>150,00 din</p>
                    </div>
                </div>
                
            <div 
            className='chooseGrain'  
            style={coffeeName == 'Topla čokolada' ? {display: 'none'} : null}>
                <p>Izaberi zrno</p>
                <img src={coffeeGrain} alt="Coffee Grain" />
            </div>

            <div className='grainClass' style={coffeeName == 'Topla čokolada' ? {display: 'none'} : {display: 'inline-flex'}}>
                <label htmlFor="brazil" style={coffee.grain  == 'Brazil' ? {backgroundColor: 'yellow'} : {backgroundColor: 'white'}}>
                    <input 
                    id='brazil' 
                    type='radio' 
                    name='grain' 
                    value='Brazil'
                    onChange={handleChange}
                    />Brazil
                </label>
                <label htmlFor="kuba" style={coffee.grain  == 'Kuba' ? {backgroundColor: 'yellow'} : {backgroundColor: 'white'}}>
                    <input 
                    id='kuba' 
                    type='radio' 
                    name='grain' 
                    value='Kuba'
                    onChange={handleChange}
                    />Kuba
                </label>
                <label htmlFor="etiopija" style={coffee.grain  == 'Etiopija' ? {backgroundColor: 'yellow'} : {backgroundColor: 'white'}}>
                    <input 
                    id='etiopija'
                    type='radio' 
                    name='grain'
                    value='Etiopija'
                    onChange={handleChange}
                    />Etiopija
                </label>
            </div>

            <div className='chooseMilk' 
            style={
                coffeeName == 'Esspreso kratki' || 
                coffeeName == 'Esspreso dugi' ||
                coffeeName == 'Americano' ||
                coffeeName == 'Lungo Ristretto' ||
                coffeeName == 'Affogato' ||
                coffeeName == 'Affogato sa sladoledom' ||
                coffeeName == 'Turkish Coffee' ||
                coffeeName == 'Cold Brew' ||
                coffeeName == 'Ice Coffee' ||
                coffeeName == 'Ice Coffee sa sladoledom' 
                ? {display: 'none'} : null}>

                <p>Izaberi mleko</p>
                <img src={milk} alt="Milk" />
            </div>
            <div className='milkClass' 
            style={
                coffeeName == 'Esspreso kratki' || 
                coffeeName == 'Esspreso dugi' ||
                coffeeName == 'Americano' ||
                coffeeName == 'Lungo Ristretto' ||
                coffeeName == 'Affogato' ||
                coffeeName == 'Affogato sa sladoledom' ||
                coffeeName == 'Turkish Coffee' ||
                coffeeName == 'Cold Brew' ||
                coffeeName == 'Ice Coffee' ||
                coffeeName == 'Ice Coffee sa sladoledom' 
                ? {display: 'none'} : {display: 'inline-flex'}}>
                <label htmlFor="obicno" style={coffee.milk  == 'Obično' ? {backgroundColor: 'yellow'} : {backgroundColor: 'white'}}>
                    <input
                    id='obicno'
                    type='radio' 
                    name='milk'
                    value='Obično'
                    onChange={handleChange}
                    />Obično
                </label>
                <label htmlFor='sojino' style={coffee.milk  == 'Sojino' ? {backgroundColor: 'yellow'} : {backgroundColor: 'white'}}>
                    <input
                    id='sojino'
                    type='radio' 
                    name='milk'
                    value='Sojino'
                    onChange={handleChange}
                    />Sojino
                </label>
                <label htmlFor="bademovo" style={coffee.milk  == 'Bademovo' ? {backgroundColor: 'yellow'} : {backgroundColor: 'white'}}>
                    <input
                    id='bademovo'
                    type='radio' 
                    name='milk'
                    value='Bademovo'
                    onChange={handleChange}
                    />Bademovo
                </label>
                
            </div>

                <div className='howMuchCoffee'>
                    <span 
                    className='littleCircle'
                    onClick={handleMinusCount}
                    >-</span>
                    <p>{count}</p>
                    <span 
                    className='littleCircle2'
                    onClick={handlePlusCount}
                    >+</span>
                </div>

            <div className='btns'>
                <button 
                style={ addToBasket ? {backgroundColor: 'yellow'} : {backgroundColor: 'white'}}
                type='submit'
                >DODAJ</button>
                <button 
                style={ CoffeeInfo ? {backgroundColor: 'white'} : {backgroundColor: 'yellow'}}
                onClick={handleClose}
                >OTKAŽI</button>
            </div>
        </form>
    </div> 
            { addToBasket && <SuccessfulNotificationPortal closeModal={() => setAddToBasket()} sendT={count}/>}
    </div>

}