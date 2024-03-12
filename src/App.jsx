import { useState } from 'react';
import './App.css'
import { HomePage } from './pages/HomePage'
import { NotRegistredComp } from './loginRegistration/NotRegistred';
import { Registration } from './loginRegistration/Registration';
import { RegistredHomePage } from './pages/RegistredHomePage';

function App() {
  const [showPage, setShowPage] = useState(false)

  return  <div>
    
    <HomePage />
    <RegistredHomePage />
    </div>
}

export default App
  