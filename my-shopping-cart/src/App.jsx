//import { useState } from 'react'
//import Shop from './components/Shop'
import './App.css'

import Navbar from './components/ Navbar'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


function App() {
  //const [count, setCount] = useState(0)
  const [count, setCount] = useState()

  useEffect(()=>{
    setCount(count);

  }, [])

  return (
    <>
      <Navbar count={count} />

      <header><h1>Welcome to Shopfree!</h1>
        <br />
        <h2>Ready to shop?</h2>
        <br />
        <button>          
          <Link to="shop">Shop now</Link>
        </button>
      </header>
      <img src='./img/4092982.jpg' alt="shop" />
      <p>Image by storyset on Freepik</p>
      <footer> Made by Chinelo Nwobbi</footer>


    </>
  )
}

export default App;
