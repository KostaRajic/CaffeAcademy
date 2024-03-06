import cappuccino from '../assets/Image/Special Selection images/cappuccino.png'
import affogato from '../assets/Image/Special Selection images/affogatoo.png'
import iceCoffee from '../assets/Image/Special Selection images/ice-coffee.png'
import caffeLatte from '../assets/Image/Special Selection images/caffe-latte.png'
import espresso from '../assets/Image/Special Selection images/espresso.png'


export const SpecialSelection = () => {

    return (
        <section className="selection">
            <h3>Izdvajamo</h3>
            <article>
                <div>
                    <img src={cappuccino} alt="Cappuccino" />
                    <h4>Cappuccino</h4>
                    <p>Kombinacija espressa, mleka i mlečne pene. Za dobro jutro.</p>
                </div>

                <div>
                    <img src={affogato} alt="Affogato" />
                    <h4>Affogato</h4>
                    <p>Espresso i kugla omiljenog sladoleda? Zašto da ne.</p>
                </div>

                <div>
                    <img src={iceCoffee} alt="Ice Coffee" />
                    <h4>Ice Coffee</h4>
                    <p>Ledena kafa, kada ti je potrebno pravo osveženje.</p>
                </div>

                <div>
                    <img src={caffeLatte} alt="Caffe Latte" />
                    <h4>Caffe Latte</h4>
                    <p>Latte, ako voliš produženu harmoniju kafe i mleka.</p>
                </div>

                <div>
                    <img src={espresso} alt="Espresso" />
                    <h4>Espresso</h4>
                    <p>Kratka, a jaka. Kada želiš instant razbuđivanje.</p>
                </div>
            </article>
        </section>
    )
}