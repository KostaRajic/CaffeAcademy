export function LoginInRegistrationPopUp({closeModal}) {

    return <div className="loginPopUpModalBackground" onClick={() => closeModal(false)}>
        <div className="loginPopUpModal">
            <button className="logIn">PRIJAVI SE</button>
            <button className="register">REGISTRUJ SE</button>
        </div>
    </div>
}