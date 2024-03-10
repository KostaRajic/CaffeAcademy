import AcademyImg from '../assets/Image//Header Images/academy-logo.png'


export const ConfiredEmail = () => {

    return <div id='confirmedEmail'>
    <img src={AcademyImg} alt="AcademyImg" />
    <div className='confirmedEmailClass'>
        <h3>E-mail adresa potvrđena</h3>
        <p>Uspešno ste potvrdili vašu e-mail adresu.</p>
    </div>
    <button>U redu</button>
</div>
}