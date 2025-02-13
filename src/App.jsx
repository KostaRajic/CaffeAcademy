/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import './App.css'
import { HomePage } from './pages/HomePage'
import { RegistredHomePage } from './pages/RegistredHomePage';
import { useContextAuth } from './context/ModalContext';


function App() {
  const { isLoggedIn , setIsLoggedIn } = useContextAuth();

  return  <div>
    { isLoggedIn ? <RegistredHomePage/> : <HomePage /> }
    </div>

}

export default App