import AcademyImg from '../assets/Image//Header Images/academy-logo.png'

export const ConfirmEmail = () => {

    return <div id='confirmEmail'>
    <img src={AcademyImg} alt="AcademyImg" />
    <div className='confirmEmailClass'>
        <h3>Potvrdite e-mail adresu</h3>
        <p>Molimo vas potvrdite vašu e-mail adresu.</p>
    </div>
    <button>U redu</button>
</div>
}