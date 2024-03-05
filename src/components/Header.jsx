import logo from '../assets/Image/Header Images/academy-logo.png'
import profile from '../assets/Image/Header Images/profile.png'
import coffeeToGo from '../assets/Image/Header Images/coffee-to-go.png'
import coffeeNumber from '../assets/Image/Header Images/coffee-number.png'

export const Header = () => {


    return (
        <header className="header">
            <img src={logo} alt='Academy Logo' />
            <div className='right-side'>
                <img src={profile} alt='Profile Logo' />
                <div className='coffee-img'>
                    <img src={coffeeToGo} alt='Coffee to go Logo' />
                    <img src={coffeeNumber} alt="Number of coffees" />
                </div>
            </div>
        </header>
    )
}