//import { useState } from 'react'
//import Shop from './components/Shop'
import './App.css'

import Navbar from './components/ Navbar'
import { Link } from 'react-router-dom'
import { useState } from 'react'


function App() {
  //const [count, setCount] = useState(0)
  const [count, setCount] = useState(3)

  setCount(count);

  return (
    <>
      <Navbar count={count} />

      <header><h1>Welcome to Project Selfcare!</h1>
        <br />
        <h2>Ready to shop?</h2>
        <br />
        <button>          <Link to="shop">Shop now</Link>
        </button>
      </header>
      

    </>
  )
}

export default App
