import AcademyImg from '../assets/Image//Header Images/academy-logo.png'
import Error from '../assets/Image/Passwrod Error image/error.png'


export const PasswordError = () => {

    return <div id='passwordError'>
        <img src={AcademyImg} alt="AcademyImg" />
        <div className='error'>
            <img src={Error} alt="Error" />
            <p>Greška. Lozinka mora da sadrži minimum 8 karaktera, 
                jedno malo slovo, jedno veliko slovo i jedan broj. </p>
        </div>
        <button>Pokušaj opet</button>
    </div>
}