import { CoffeeMenu } from "../components/CoffeeMenu"
import { ContactInfo } from "../components/ContactInfo"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { HeroSection } from "../components/HeroSection"
import { RegistredHeader } from "../registredComponents/RegistredHeader"
import { SpecialSelection } from "../components/SpecialSelection"
import { WelcomeInfo } from "../components/WelcomeInfo"
import { CoffeeInfo } from "../registredComponents/CoffeeInfo"

export const RegistredHomePage = () => {

    return <div>
            
        <RegistredHeader />
        <HeroSection />
        <CoffeeMenu/>
        <SpecialSelection />
        <WelcomeInfo />
        <ContactInfo />
        <Footer />
        <CoffeeInfo/>
        
    </div>

}