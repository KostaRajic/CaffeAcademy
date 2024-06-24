/* eslint-disable no-redeclare */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

import { CoffeeMenu } from "../components/CoffeeMenu"
import { ContactInfo } from "../components/ContactInfo"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { HeroSection } from "../components/HeroSection"
import { SpecialSelection } from "../components/SpecialSelection"
import { WelcomeInfo } from "../components/WelcomeInfo"
import { useContextAuth } from "../context/ModalContext"
import { NotRegistredComp } from "../loginRegistration/NotRegistred";


export const HomePage = ({closeModal}) => {

    const { showModal,  setShowModal, showModal2, setShowModal2 } = useContextAuth()

    const handleLogin = () => {
        showModal ? setShowModal(!showModal) : setShowModal2(!showModal2)
    }

    function closeModal(state) {
        state === 'goBack' ? setShowModal2(false) : setShowModal2(true)
      }

    return <div>    
                        <Header />
                        <div onClick={handleLogin}>
                        <HeroSection />
                        <CoffeeMenu />
                        <SpecialSelection />
                        <WelcomeInfo />
                        <ContactInfo />
                        <Footer />
                        </div>
                        
                      { showModal2 && <NotRegistredComp  handleLoginModal={(e) => closeModal(e)} />}
    </div>
}