import { useState } from "react"
import { CoffeeMenu } from "../components/CoffeeMenu"
import { ContactInfo } from "../components/ContactInfo"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { HeroSection } from "../components/HeroSection"
import { SpecialSelection } from "../components/SpecialSelection"
import { WelcomeInfo } from "../components/WelcomeInfo"
import { NotRegistredComp } from "../loginRegistration/NotRegistred"

export const HomePage = () => {
    const [notRegistred, setNotRegistred] = useState(false);


    return <div onClick={() => setNotRegistred(!notRegistred)}>
        { notRegistred && <NotRegistredComp/>}
        <Header />
        <HeroSection />
        <CoffeeMenu />
        <SpecialSelection />
        <WelcomeInfo />
        <ContactInfo />
        <Footer />
        
    </div>

}