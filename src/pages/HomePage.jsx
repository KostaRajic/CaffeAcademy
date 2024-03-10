import { useState } from "react"
import { CoffeeMenu } from "../components/CoffeeMenu"
import { ContactInfo } from "../components/ContactInfo"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { HeroSection } from "../components/HeroSection"
import { SpecialSelection } from "../components/SpecialSelection"
import { WelcomeInfo } from "../components/WelcomeInfo"
import { NotRegistredComp } from "../loginRegistration/NotRegistred"
import { Login } from "../loginRegistration/Login"
import { Registration } from "../loginRegistration/Registration"
import { LoginInRegistrationPopUp } from "../loginRegistration/LoginInRegistrationPopUp"
import { ForgottenPassword } from "../loginRegistration/ForgottenPassword"
import { CreateNewPassword } from "../loginRegistration/CreateNewPassword"
import { PasswordError } from "../loginRegistration/PasswordError"
import { PasswrodSuccess } from "../loginRegistration/PasswordSuccess"
import { ConfirmEmail } from "../loginRegistration/ConfirmE-mail"
import { ConfiredEmail } from "../loginRegistration/ConfirmedE-mail"

export const HomePage = () => {
    const [notRegistred, setNotRegistred] = useState(false);

    
    return <div>
                
        <Header />
        <div onClick={() => setNotRegistred(true)}>
        { notRegistred && <NotRegistredComp />}
            <HeroSection />
            <CoffeeMenu/>

            <SpecialSelection />
            <WelcomeInfo />
            <ContactInfo />
            <Footer />
        </div>
        {/* <Login /> */}
        {/* <Registration /> */}
        {/* <ForgottenPassword /> */}
        {/* <CreateNewPassword /> */}
        {/* <PasswordError /> */}
        {/* <PasswrodSuccess /> */}
        {/* <ConfirmEmail /> */}
        {/* <ConfiredEmail /> */}

    </div>

}