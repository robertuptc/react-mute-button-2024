import { useState } from 'react'
import logoOn from './assets/icons/on.svg'
import logoOff from './assets/icons/off.svg'

import './App.css'

function App() {
  const [toggleIcon, setToggleIcon] = useState(true)

  return (
    <>
      <img src={toggleIcon ? logoOn : logoOff} onClick={() => {setToggleIcon(!toggleIcon)}} className="speaker" alt="speaker icon" />
    </>
  )
}

export default App
