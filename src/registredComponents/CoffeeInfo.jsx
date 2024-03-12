import cupOfCoffee from '../assets/Image/Main Section Images/cup-of-coffee.png'

export const CoffeeInfo = () => {

    return <>
    <header className="headerClass">Narudžbina</header>
    <div className='coffee-info'>
        <form className="imgColor">
            <img src={cupOfCoffee} alt="Cup of Coffee" />
            <h3>Esspreso dugi</h3>
            <p>Izaberi veličinu</p>
                <div>
                    <div className='small'>
                        <div>
                        <img src={cupOfCoffee} alt="Cup of Coffee" />
                        <p>S</p>
                        </div>
                        <p>130,00 din</p>
                    </div>
                

                    <div className='medium'>
                        <div>
                        <img src={cupOfCoffee} alt="Cup of Coffee" />
                        <p>M</p>
                        </div>
                        <p>140,00 din</p>
                    </div>

                    <div className='large'>
                        <div>
                        <img src={cupOfCoffee} alt="Cup of Coffee" />
                        <p>L</p>
                        </div>
                        <p>150,00 din</p>
                    </div>
                </div>
                <p>Izaberi zrno</p>
            <div className='grainClass'>
                <div>Brazil</div>
                <div>Kuba</div>
                <div>Etiopija</div>
            </div>

                <p>Izaberi mleko</p>
            <div>
                <div>Obično</div>
                <div>Sojino</div>
                <div>Bademovo</div>
            </div>

            <div>
                <div className='littleCircle'>-</div>
                <p>1</p>
                <div className='littleCircle2'>+</div>
            </div>
        </form>
    </div>
    </>
}