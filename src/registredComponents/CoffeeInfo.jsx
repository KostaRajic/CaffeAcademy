/* eslint-disable react/jsx-key */
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
import { useEffect, useRef, useState } from 'react'
import cupOfCoffee from '../assets/Image/Main Section Images/cup-of-coffee.png'
import coffeeGrain from '../assets/Image/RegistredImages/coffee-grain.png'
import milk from '../assets/Image/RegistredImages/milk.png';
import beckVector from '../assets/Image/RegistredImages/backVector.png'
import { SuccessfulNotificationPortal } from './SuccessfulNotification'
import { useContextAuth } from '../context/ModalContext';
import { setNewDate } from '../date/date.js'
import { coffeeArr } from '../fileWithCoffee/Coffee.js';
import { FullBasket } from './FullBasket.jsx';


export const CoffeeInfo = ({ coffeeName, closeCoffeeInfo }) => {
    const [ addToBasket, setAddToBasket ] = useState(false);
    const [ fullBasket, setFullBasket ] = useState(false)
    const [ coffee, setCoffee ] = useState(
        {
        size: '',
        grain: '',
        milk: '',
    });
    let { count, setCount, coffeeBasket, setCoffeeBasket, basket, setBasket, sumOfCoffee } = useContextAuth();
    const [ date, setDate ] = useState(new Date());
    const smallPrice = useRef(null)
    const mediumPrice = useRef(null)
    const largePrice = useRef(null)

    let smallCoffeePrice = parseInt(smallPrice?.current?.innerText.slice(0, 3))
    let mediumCoffeePrice = parseInt(mediumPrice?.current?.innerText.slice(0, 3))
    let largeCoffeePrice = parseInt(largePrice?.current?.innerText.slice(0, 3))
    console.log(basket)
    console.log(sumOfCoffee)


    useEffect(() => {
        setCount(1);
    },[])

    useEffect(() => {  
        setCoffeeBasket(sumOfCoffee)
    }, [])

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
            if (sumOfCoffee !== 10 ) {
             if (count == 1) {
                setCount(1)
                
            }   else if ( count == 2 ) {
                    setCoffeeBasket(prev => prev - 2)
            }
                else if ( sumOfCoffee >= 1 ) {
                    setCoffeeBasket(prev => prev - 1)
            }}}

        const handlePlusCount = () => {
                setCount(prev => prev + 1)
                    if (count == 1) {
                        setCoffeeBasket(prev => prev + 2)
                    } else setCoffeeBasket(prev => prev + 1)
        }
    
    const handleCoffeeCountSizeAndGrain = () => {
        if (coffeeBasket <= 10 && count <= 10) {
        setBasket(prevItems => {
            const itemExists = prevItems.find(item => item.grain === coffee.grain && item.size === coffee.size && item.coffeeName === coffeeName);
            if (itemExists) {
              return prevItems.map(item => 
                item.grain === coffee.grain && item.size === coffee.size
                  ? { ...item, 
                    price: coffee.size == 'small' && count * smallCoffeePrice ||
                        coffee.size == 'medium' && count * mediumCoffeePrice ||
                        coffee.size == 'large' && count * largeCoffeePrice,
                    standardCoffeePrice: coffee.size == 'small' && smallCoffeePrice ||
                        coffee.size == 'medium' && mediumCoffeePrice ||
                        coffee.size == 'large' && largeCoffeePrice,
                    count: coffeeBasket <= 10 ? item.count + count : item.count
                }
                  : item
              );
            } else { 
              return [...prevItems, {id: basket.length + 1, ...coffee, coffeeName: coffeeName, date: setNewDate(date), 
                    price: coffee.size == 'small' && count * smallCoffeePrice ||
                            coffee.size == 'medium' && count * mediumCoffeePrice ||
                            coffee.size == 'large' && count * largeCoffeePrice,
                    standardCoffeePrice: coffee.size == 'small' && smallCoffeePrice ||
                            coffee.size == 'medium' && mediumCoffeePrice ||
                            coffee.size == 'large' && largeCoffeePrice,
                    count: coffeeBasket <= 10 && count }];
            }
          })
        }}

    const handleCoffeeCountSizeAndMilk = () => {
        if (coffeeBasket <= 10) {
        setBasket(prevItems => {
            const itemExists = prevItems.find(item => item.milk === coffee.milk && item.size === coffee.size && item.coffeeName === coffeeName);
            if (itemExists) {
              return prevItems.map(item => 
                item.milk === coffee.milk && item.size === coffee.size
                ? { ...item, 
                    price: coffee.size == 'small' && count * smallCoffeePrice ||
                        coffee.size == 'medium' && count * mediumCoffeePrice ||
                        coffee.size == 'large' && count * largeCoffeePrice,
                    standardCoffeePrice: coffee.size == 'small' && smallCoffeePrice ||
                        coffee.size == 'medium' && mediumCoffeePrice ||
                        coffee.size == 'large' && largeCoffeePrice,
                    count: coffeeBasket <= 10 ? item.count + count : item.count}
                  : item
              );
            } else {
              return [...prevItems, {id: basket.length + 1, ...coffee, coffeeName: coffeeName, date: setNewDate(date), 
                price: coffee.size == 'small' && count * smallCoffeePrice ||
                        coffee.size == 'medium' && count * mediumCoffeePrice ||
                        coffee.size == 'large' && count * largeCoffeePrice,
                    standardCoffeePrice: coffee.size == 'small' && smallCoffeePrice ||
                        coffee.size == 'medium' && mediumCoffeePrice ||
                        coffee.size == 'large' && largeCoffeePrice,
                    count: coffeeBasket <= 10 && count }];
            }
          })
        }}

    const handleSubmit = (e) => {
        e.preventDefault();

            if (coffeeName == 'Topla čokolada' && coffee.size !== '' && coffee.milk !== '') {
                if ( count == 1) {
                    setCoffeeBasket(++coffeeBasket) 
                }
                if (basket.length === 0) {
                    setBasket([...basket, {id: basket.length + 1, ...coffee, coffeeName: coffeeName, date: setNewDate(date), 
                        price: coffee.size == 'small' && count * smallCoffeePrice ||
                            coffee.size == 'medium' && count * mediumCoffeePrice ||
                            coffee.size == 'large' && count * largeCoffeePrice,
                        standardCoffeePrice: coffee.size == 'small' && smallCoffeePrice ||
                            coffee.size == 'medium' && mediumCoffeePrice ||
                            coffee.size == 'large' && largeCoffeePrice,
                    count: coffeeBasket <= 10 && count}])
                } else handleCoffeeCountSizeAndMilk()
                    coffeeBasket <= 10 && count > 1 ? setAddToBasket(true) : setFullBasket(true)
        }

        else if (coffeeName == 
            'Esspreso kratki' || 
            'Esspreso dugi' || 
            'Americano' || 
            'Lungo Ristretto' || 
            'Affogato' || 
            'Affogato sa sladoledom' || 
            'Turkish Coffee' ||
            'Cold Brew' ||
            'Ice Coffee' || 
            coffee.size !== '' && 
            coffee.grain !== '') {

            if ( count == 1) {
                setCoffeeBasket(++coffeeBasket) 
            }
    
            if (basket.length === 0 && coffeeBasket <= 10 && count <= 10 ) {
                setBasket([...basket, {id: basket.length + 1, ...coffee, coffeeName: coffeeName, date: setNewDate(date), 
                    price: coffee.size == 'small' && count * smallCoffeePrice ||
                        coffee.size == 'medium' && count * mediumCoffeePrice ||
                        coffee.size == 'large' && count * largeCoffeePrice,
                    standardCoffeePrice: coffee.size == 'small' && smallCoffeePrice ||
                        coffee.size == 'medium' && mediumCoffeePrice ||
                        coffee.size == 'large' && largeCoffeePrice,
                    count: count}])
            }  else handleCoffeeCountSizeAndGrain()
                coffeeBasket <= 10 && count >= 1 ? setAddToBasket(true) : setFullBasket(true)
        }

        else if (coffee.size !== '' && coffee.grain !== '' && coffee.milk !== '') {

            if ( count == 1) {
            setCoffeeBasket(++coffeeBasket) 
            }

            if (basket.length === 0) {
                setBasket([...basket, {id: basket.length + 1, ...coffee, coffeeName: coffeeName, date: setNewDate(date), count: coffeeBasket <= 10 && count}])
            }  else handleCoffeeCountSizeAndMilk()
                coffeeBasket <= 10 && count >= 1 ? setAddToBasket(true) : setFullBasket(true)
    }
}

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
    <div>
        {coffeeArr?.filter(c => c.name == coffeeName)
                    .map((cafe) => 

            <form className="imgColor" onSubmit={handleSubmit}>
                <div key={cafe.id}>
                <div id='chosenCoffee'>
                    <img src={cupOfCoffee} alt="Cup of Coffee" />
                    <h3>{cafe.name}</h3>
                </div>
                <h4>Izaberi veličinu</h4>
            <div className='coffeeSize'>
                <div className='small'>
                    <label 
                    htmlFor="smallCup" 
                    style={coffee.size == 'small' ? { backgroundColor: 'rgba(255, 165, 0, 1)'} : { backgroundColor: 'white' }}>
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
                    <p ref={smallPrice}>{cafe?.price?.small}</p>
                </div>
                
                <div className='medium'>
                    <label 
                    htmlFor="mediumCup" 
                    style={coffee.size == 'medium' ? { backgroundColor: 'rgba(255, 165, 0, 1)' } : {backgroundColor: 'white'}}> 
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
                    <p ref={mediumPrice}>{cafe?.price?.medium}</p>
                </div>
            
                <div className='large'>
                    <label 
                    htmlFor="largeCup" 
                    style={coffee.size  == 'large' ? { backgroundColor: 'rgba(255, 165, 0, 1)'} : {backgroundColor: 'white'}}>
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
                    <p ref={largePrice}>{cafe?.price?.large}</p>
                </div>
            </div>
            
            <div 
            className='chooseGrain'  
            style={coffeeName == 'Topla čokolada' ? {display: 'none'} : null}>
                <p>Izaberi zrno</p>
                <img src={coffeeGrain} alt="Coffee Grain" />
            </div>

            <div className='grainClass' style={coffeeName == 'Topla čokolada' ? {display: 'none'} : {display: 'inline-flex'}}>
                <label htmlFor="brazil" style={coffee.grain  == 'Brazil' ? { backgroundColor: 'rgba(255, 165, 0, 1)', color: 'white' } : { backgroundColor: 'white' }}>
                    <input 
                    id='brazil' 
                    type='radio' 
                    name='grain' 
                    value='Brazil'
                    onChange={handleChange}
                    />Brazil
                </label>
                <label htmlFor="kuba" style={coffee.grain  == 'Kuba' ? { backgroundColor: 'rgba(255, 165, 0, 1)', color: 'white' } : { backgroundColor: 'white' }}>
                    <input 
                    id='kuba' 
                    type='radio' 
                    name='grain' 
                    value='Kuba'
                    onChange={handleChange}
                    />Kuba
                </label>
                <label htmlFor="etiopija" style={coffee.grain  == 'Etiopija' ? { backgroundColor: 'rgba(255, 165, 0, 1)', color: 'white' } : { backgroundColor: 'white' }}>
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
                <label htmlFor="obicno" style={coffee.milk  == 'Obično' ? { backgroundColor: 'rgba(255, 165, 0, 1)', color: 'white' } : {backgroundColor: 'white'}}>
                    <input
                    id='obicno'
                    type='radio' 
                    name='milk'
                    value='Obično'
                    onChange={handleChange}
                    />Obično
                </label>
                <label htmlFor='sojino' style={coffee.milk  == 'Sojino' ? { backgroundColor: 'rgba(255, 165, 0, 1)', color: 'white' } : {backgroundColor: 'white'}}>
                    <input
                    id='sojino'
                    type='radio' 
                    name='milk'
                    value='Sojino'
                    onChange={handleChange}
                    />Sojino
                </label>
                <label htmlFor="bademovo" style={coffee.milk  == 'Bademovo' ? { backgroundColor: 'rgba(255, 165, 0, 1)', color: 'white'  } : {backgroundColor: 'white'}}>
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
                type='submit'
                >DODAJ</button>
                <button 
                onClick={handleClose}
                >OTKAŽI</button>
            </div>
            </div>
            </form>
        )}
</div>
    </div> 
            { addToBasket && <SuccessfulNotificationPortal closeModal={() => setAddToBasket()} prices={smallCoffeePrice}/>}
            { fullBasket && <FullBasket/>}
    </div>

}