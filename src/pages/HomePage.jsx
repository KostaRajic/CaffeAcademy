import { CoffeeMenu } from "../components/CoffeeMenu"
import { ContactInfo } from "../components/ContactInfo"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { HeroSection } from "../components/HeroSection"
import { SpecialSelection } from "../components/SpecialSelection"
import { WelcomeInfo } from "../components/WelcomeInfo"

export const HomePage = () => {

    return <div>
        <Header />
        <HeroSection />
        <CoffeeMenu />
        <SpecialSelection />
        <WelcomeInfo />
        <ContactInfo />
        <Footer />
    </div>

}