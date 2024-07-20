/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
/* eslint-disable no-undef */
import React, { useContext, useState, useRef, useEffect, Suspense } from 'react';
import cupOfCoffee from '../assets/Image/Main Section Images/cup-of-coffee.png'
import plus from '../assets/Image/Main Section Images/plus.png'

import { CoffeeInfo } from '../registredComponents/CoffeeInfo';
import { useContextAuth } from '../context/ModalContext';
import { coffeeArr } from '../fileWithCoffee/Coffee';


export const CoffeeMenu = () => {
    const [ coffeeName, setCoffeeName ] = useState(false);
    const { showCoffeeInfo, setShowCoffeeInfo } = useContextAuth()
    const { isLoggedIn , setIsLoggedIn } = useContextAuth();


    const handleSubmit = (e) => {
        if (isLoggedIn) {
            setShowCoffeeInfo(!showCoffeeInfo)
            setCoffeeName(coffeeArr[e].name)
        }
    }

    
    return <section className='coffee-menu-section'>

        <h1>Naša ponuda</h1>
        
        <div className='coffee-cart'>
            {coffeeArr.map((coffee, inx) => 
                <div key={coffee.id}>
                    <img src={cupOfCoffee} alt='Cup of coffee' />
                    <h2 style={{ width: '80%',height: '40px'}}>{coffee.name}</h2>
                    <p>{coffee.text}</p>
                    <button 
                    onClick={() => handleSubmit(inx)}
                    type='button' 
                    ><img src={plus} alt="Plus" /></button>
                </div>)}
            
            
            {/* <div key={inx}>
                <img src={cupOfCoffee} alt='Cup of coffee' />
                <h2>Esspreso kratki <br /> sa mlekom</h2>
                <p>Intenzivna kafa obogaćena kremastim dodatkom mleka, stvarajući  zadovoljavajući i bogat ukus koji osvaja.</p>
                <button 
                onClick={() => handleSubmit(inx)}
                type='button'
                ><img src={plus} alt="Plus" /></button>
            </div>

            <div key={inx}>
                <img src={cupOfCoffee} alt='Cup of coffee' />
                <h2 style={{ width: '80px', height: '40px' }} ref={esspresoDugi}>Esspreso dugi</h2>
                <p>Produžena verzija espressa, sa malo više vode, rezultira blažom notom  i produženim uživanjem u kafi.</p>
                <button 
                type='button'
                onClick={() => handleSubmit(inx)}
                ><img src={plus} alt="Plus" /></button>
            </div>

            <div key={inx}>
                <img src={cupOfCoffee} alt='Cup of coffee' />
                <h2 ref={esspresoDugiSaMlekom}>Esspreso dugi <br />
                    sa mlekom</h2>
                <p>Espresso obogaćen mlekom za savršenu harmoniju arome i ukusa.  Idealan izbor za one koji vole blaži ukus.</p>
                <button 
                type='button'
                onClick={() => handleSubmit(inx)}
                ><img src={plus} alt="Plus" /></button>
            </div>

            <div key={inx}>
                <img src={cupOfCoffee} alt='Cup of coffee' />
                <h2 ref={americano}>Americano</h2>
                <p>Osvežavajući spoj espresso kafe i vruće vode, idealan za laganije uživanje,  za bilo koje doba dana.</p>
                <button 
                type='button'
                onClick={() => handleSubmit(inx)}
                ><img src={plus} alt="Plus" /></button>
            </div>

            <div key={inx}>
                <img src={cupOfCoffee} alt='Cup of coffee' />
                <h2 ref={americanoSaMlekom}>Americano <br /> sa mlekom</h2>
                <p>Kombinacija laganog osvežavajućeg ukusa americana sa kremastim  mlekom, za izvanredno uravnotežen napitak.</p>
                <button 
                type='button'
                onClick={handleSubmit}
                ><img src={plus} alt="Plus" /></button>
            </div>

            <div key={inx}>
                <img src={cupOfCoffee} alt='Cup of coffee' />
                <h2 ref={macchiato}>Macchiato</h2>
                <p>Ova balansirana kombinacija nudi savršeno iskustvo za one koji vole  punoću espressa uz blagi dodir mleka.</p>
                <button 
                type='button'
                onClick={handleSubmit}
                ><img src={plus} alt="Plus" /></button>
            </div>

            <div key={inx}>
                <img src={cupOfCoffee} alt='Cup of coffee' />
                <h2 ref={esspresoMacchiato}>Espresso <br /> Macchiato</h2>
                <p>Jednostavan, ali izrazito ukusan napitak, koji kombinuje čist, jak ukus  espressa sa malo mleka.</p>
                <button 
                type='button'
                onClick={handleSubmit}
                ><img src={plus} alt="Plus" /></button>
            </div>

            <div key={inx}>
                <img src={cupOfCoffee} alt='Cup of coffee' />
                <h2 ref={cappuccino}>Cappuccino</h2>
                <p>Klasični italijanski napitak koji spaja intenzivnu aromu espressa sa kremastim mlekomi penom na vrhu.</p>
                <button 
                type='button'
                onClick={handleSubmit}
                ><img src={plus} alt="Plus" /></button>
            </div>

            <div key={inx}>
                <img src={cupOfCoffee} alt='Cup of coffee' />
                <h2 ref={latte}>Latte</h2>
                <p>Lagani napitak koji kombinuje intenzivan ukus espressa sa nežnom i  kremastom teksturom mleka.</p>
                <button 
                type='button'
                onClick={handleSubmit}
                ><img src={plus} alt="Plus" /></button>
            </div>

            <div key={inx}>
                <img src={cupOfCoffee} alt='Cup of coffee' />
                <h2 ref={mochaBelaChocolada}>Mocha <br /> Bela Čokolada</h2>
                <p>Osvežavajuća poslastica koja spaja bogati ukus bele čokolade sa  intenzivnom aromom espressa i mlečne pene.</p>
                <button 
                type='button'
                onClick={handleSubmit}
                ><img src={plus} alt="Plus" /></button>
            </div>

            <div key={inx}>
                <img src={cupOfCoffee} alt='Cup of coffee' />
                <h2 ref={mochaCrnaChocolada}>Mocha <br />Crna Čokolada</h2>
                <p>Zavodljivi napitak koji kombinuje intenzivan ukus tamne čokolade sa  espressom i kremastom mlečnom penom.</p>
                <button 
                type='button'
                onClick={handleSubmit}
                ><img src={plus} alt="Plus" /></button>
            </div>

            <div key={inx}>
                <img src={cupOfCoffee} alt='Cup of coffee' />
                <h2 ref={mochaLesnik}>Mocha <br />Lešnik</h2>
                <p>Napitak koji spaja intenzivan ukus lešnika sa aromatičnim espressom i  kremastom mlečnom penom.</p>
                <button 
                type='button'
                onClick={handleSubmit}
                ><img src={plus} alt="Plus" /></button>
            </div>

            <div key={inx}>
                <img src={cupOfCoffee} alt='Cup of coffee' />
                <h2 ref={flatWhite}>Flat <br />White</h2>
                <p>Elegantan napitak koji kombinuje intenzivnu aromu espressa i mleka sa  tankim slojem pene na vrhu.</p>
                <button 
                type='button'
                onClick={handleSubmit}
                ><img src={plus} alt="Plus" /></button>
            </div>

            <div key={inx}>
                <img src={cupOfCoffee} alt='Cup of coffee' />
                <h2 ref={lungoRisstreto}>Lungo <br />Ristretto</h2>
                <p>Produžena verzija klasičnog espressa, ali sa malo intenzivnijim ukusom i  savršenom ravnotežom.</p>
                <button 
                type='button'
                onClick={handleSubmit}
                ><img src={plus} alt="Plus" /></button>
            </div>

            <div key={inx}>
                <img src={cupOfCoffee} alt='Cup of coffee' />
                <h4 className='affogato-class' ref={affogato}>Affogato</h4>
                <p>Jednostavna, izuzetno ukusna poslastica koja spaja intenzivan ukus  espressa sa osvežavajućim sladoledom.</p>
                <button 
                type='button'
                onClick={handleSubmit}
                ><img src={plus} alt="Plus" /></button>
            </div>

            <div key={inx}>
                <img src={cupOfCoffee} alt='Cup of coffee' />
                <h2 ref={affogatoSaSladoledom}>Affogato <br />sa sladoledom</h2>
                <p>Slatka i osvežavajuća poslastica koja spaja intenzivan ukus espressa sa kremastom slatkoćom sladoleda.</p>
                <button 
                type='button'
                onClick={handleSubmit}
                ><img src={plus} alt="Plus" /></button>
            </div>

            <div key={inx}>
                <img src={cupOfCoffee} alt='Cup of coffee' />
                <h2 ref={frappuccino}>Frappuccino</h2>
                <p>Osvežavajući napitak koji spaja intenzivan ukus espressa sa kremastom  slatkoćom mleka i sladoleda.</p>
                <button 
                type='button'
                onClick={handleSubmit}
                ><img src={plus} alt="Plus" /></button>
            </div>

            <div key={inx}>
                <img src={cupOfCoffee} alt='Cup of coffee' />
                <h2 ref={turkishCoffee}>Turkish <br />Coffee</h2>
                <p>Tradicionalni napitak koji se priprema na poseban način, pružajući  intenzivan ukus i bogatu aromu.</p>
                <button 
                type='button'
                onClick={handleSubmit}
                ><img src={plus} alt="Plus" /></button>
            </div>

            <div key={inx}>
                <img src={cupOfCoffee} alt='Cup of coffee' />
                <h2 ref={turkishCoffeeSaMlekom}>Turkish Coffee <br />sa mlekom</h2>
                <p>Turska tradicionalna kafa sa mlekom kombinuje jaku aromu turske kafe  sa kremastim mlekom.</p>
                <button 
                type='button'
                onClick={handleSubmit}
                ><img src={plus} alt="Plus" /></button>
            </div>

            <div key={inx}>
                <img src={cupOfCoffee} alt='Cup of coffee' />
                <h2 ref={coldBrew}>Cold Brew</h2>
                <p>Osvežavajući napitak koji se priprema na poseban način, pružajući glatku  i osvežavajuću kafu bez gorčine.</p>
                <button 
                type='button'
                onClick={handleSubmit}
                ><img src={plus} alt="Plus" /></button>
            </div>

            <div key={inx}>
                <img src={cupOfCoffee} alt='Cup of coffee' />
                <h2 ref={coldBrewSaMlekom}>Cold Brew <br />sa mlekom</h2>
                <p style={{ width: '149px', height: '75px' }}>Cold Brew sa mlekom je osvežavajući napitak koji spaja glatku i  osvežavajuću kafu sa kremstim mlekom.</p>
                <button 
                type='button'
                onClick={handleSubmit}
                ><img src={plus} alt="Plus" /></button>
            </div>

            <div key={inx}>
                <img src={cupOfCoffee} alt='Cup of coffee' />
                <h2 ref={iceCoffee}>Ice Coffee</h2>
                <p>Osvežavajući napitak koji spaja intenzivan ukus kafe sa dodatkom leda za  uživanje u svakom gutljaju.</p>
                <button 
                type='button'
                onClick={handleSubmit}
                ><img src={plus} alt="Plus" /></button>
            </div>

            <div key={inx}>
                <img src={cupOfCoffee} alt='Cup of coffee' />
                <h2 ref={iceCoffeeSaSladoledom}>Ice Coffee <br />sa sladoledom</h2>
                <p>Osvežavajući napitak koji spaja intenzivan ukus kafe sa kremastom  slatkoćom sladoleda i dodatkom leda.</p>
                <button 
                type='button'
                onClick={handleSubmit}
                ><img src={plus} alt="Plus" /></button>
            </div>

            <div key={inx}>
                <img src={cupOfCoffee} alt='Cup of coffee' />
                <h2 ref={iceCoffeeSaMlekom}>Ice Coffee <br />sa mlekom</h2>
                <p>Osvežavajući napitak koji spaja intenzivan ukus kafe sa kremastim  mlekom, idealan izbor za tople dane.</p>
                <button 
                type='button'
                onClick={handleSubmit}
                ><img src={plus} alt="Plus" /></button>
            </div>

            <div key={inx}>
                <img src={cupOfCoffee} alt='Cup of coffee' />
                <h2 ref={toplaCokolada}>Topla <br />čokolada</h2>
                <p>Neodoljiva poslastica koja predstavlja spoj belgijske čokolade i mleka,  savršena za hladne dane.</p>
                <button 
                type='button'
                onClick={handleSubmit}
                ><img src={plus} alt="Plus" /></button>
            </div> */}
        </div>
        { 
            showCoffeeInfo && <CoffeeInfo coffeeName={coffeeName} closeCoffeeInfo={() => setShowCoffeeInfo()}/>  
        }
    </section >

}