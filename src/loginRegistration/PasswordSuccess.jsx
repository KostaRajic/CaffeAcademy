import AcademyImg from '../assets/Image//Header Images/academy-logo.png'

export const PasswrodSuccess = () => {

    return <div id='passwrodSuccess'>
        <img src={AcademyImg} alt="AcademyImg" />
        <div className='passwordChanged'>
            <h3>Nova lozinka kreirana</h3>
            <p>Uspešno ste kreirali novu lozinku.</p>
        </div>
        <button>U redu</button>
    </div>
}