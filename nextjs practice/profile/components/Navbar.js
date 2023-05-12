import React from 'react'
import navbarstyle from "../src/app/Navbar.module.css"
function Navbar() {
  return (
    <div>
        <ul className={navbarstyle.ul}>
            <li className={navbarstyle.li}><a href='/'>Home</a></li>
            <li className={navbarstyle.li}><a href='/contact'>Contact</a></li>
            <li className={navbarstyle.li}><a href='/about'>About</a></li>
        </ul>
    </div>
  )
}

export default Navbar