/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import './App.css'
import { HomePage } from './pages/HomePage'
import { RegistredHomePage } from './pages/RegistredHomePage';
import { CoffeeInfo } from './registredComponents/CoffeeInfo';
import { Registration } from './loginRegistration/Registration';
import { useContextAuth } from './context/ModalContext';
import { NotRegistredComp } from './loginRegistration/NotRegistred';
import { EmptyBasket } from './registredComponents/EmptyBasket';
import { CreateNewPassword } from './loginRegistration/CreateNewPassword';

export const Context2 = createContext()

function App() {
  const [ isLoggedIn , setIsLoggedIn ] = useState(false)

  return  <div>
    {/* <Context2.Provider value={[ isLoggedIn , setIsLoggedIn ]}>
    { isLoggedIn ? <RegistredHomePage/> : <HomePage /> }
    </Context2.Provider> */}

    {/* <CoffeeInfo/> */}
    <RegistredHomePage/>
    </div>
        

}

export default App