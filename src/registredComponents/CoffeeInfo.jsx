import { useState } from 'react'
import cupOfCoffee from '../assets/Image/Main Section Images/cup-of-coffee.png'
import coffeeGrain from '../assets/Image/RegistredImages/coffee-grain.png'
import milk from '../assets/Image/RegistredImages/milk.png'

export const CoffeeInfo = () => {
    const [ isChecked, setIsChecked ] = useState(false)

    return <div id='coffeeInfoContainer'>
    <header className="headerClass">Narudžbina</header>
    <div className='coffee-info'>
        <form className="imgColor">
            <div id='chosenCoffee'>
                <img src={cupOfCoffee} alt="Cup of Coffee" />
                <h3>Esspreso dugi</h3>
            </div>
        <h4>Izaberi veličinu</h4>
            <div className='coffeeSize'>
                <div className='small'>
                    <div>
                    <img src={cupOfCoffee} alt="Cup of Coffee" />
                    <span>S</span>
                    </div>
                    <p>130,00 din</p>
                </div>
                
                <div className='medium'>
                    <div>
                    <img src={cupOfCoffee} alt="Cup of Coffee" />
                    <span>M</span>
                    </div>
                    <p>140,00 din</p>
                </div>
            
                <div className='large'>
                    <div>
                    <img src={cupOfCoffee} alt="Cup of Coffee" />
                    <span>L</span>
                    </div>
                    <p>150,00 din</p>
                </div>
            </div>
            
        <div className='chooseGrain'>
            <p>Izaberi zrno</p>
            <img src={coffeeGrain} alt="Coffee Grain" />
        </div>

        <div className='grainClass'>
            <div>Brazil</div>
            <div>Kuba</div>
            <div>Etiopija</div>
        </div>

        <div className='chooseMilk'>
            <p>Izaberi mleko</p>
            <img src={milk} alt="Milk" />
        </div>
        <div className='milkClass'>
            <div>Obično</div>
            <div>Sojino</div>
            <div>Bademovo</div>
        </div>

            <div className='howMuchCoffee'>
                <span className='littleCircle'>-</span>
                <p>1</p>
                <span className='littleCircle2'>+</span>
            </div>
        <div className='btns'>
            <button>DODAJ</button>
            <button>Otkaži</button>
        </div>
        </form>
    </div>
    </div>
}