import AcademyImg from '../assets/Image//Header Images/academy-logo.png'

export const CreateNewPassword = () => {

    return <div id="createNewPasswordSection">
         <img src={AcademyImg} alt="AcademyImg" />
         <h3>Kreiraj novu lozinku</h3>
         <label htmlFor="password">
            <h5>Nova Lozinka*</h5>
            <input type='password' placeholder="Nova Lozinka" id='password'/>
         </label>

         <label htmlFor="password">
            <h5>Ponovi Novu Lozinku*</h5>
            <input type='password' placeholder="Lozinka" id='password'/>
         </label>
         <button>Kreiraj</button>
        </div>
}