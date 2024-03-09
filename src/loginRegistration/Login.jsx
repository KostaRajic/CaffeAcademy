import AcademyImg from '../assets/Image//Header Images/academy-logo.png'

export const Login = () => {


    return <div id="loginSection">
         <img src={AcademyImg} alt="AcademyImg" />
         <h3>Prijavi se</h3>
         <label htmlFor="e-mail">
            <h5>E-mail</h5>
            <input type='email' placeholder="E-mail adresa" id='e-mail'/>
         </label>
         <label htmlFor="password">
            <h5>Lozinka</h5>
            <input type='password' placeholder="Lozinka" id='password'/>
         </label>
         <p>Zaboravljena lozinka?</p>
         <button>Prijavi Se</button>
    </div>
}