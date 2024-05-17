/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import './App.css'
import { HomePage } from './pages/HomePage'
import { RegistredHomePage } from './pages/RegistredHomePage';
import { CoffeeInfo } from './registredComponents/CoffeeInfo';
import { Registration } from './loginRegistration/Registration';
import { useContextAuth } from './context/ModalContext';



function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useContextAuth(false);
  

  return  <div>

      { isLoggedIn ? <RegistredHomePage/> : <HomePage /> }

    {/* <CoffeeInfo/> */}
    {/* <Registration/> */}
    </div>
}

export default App
  