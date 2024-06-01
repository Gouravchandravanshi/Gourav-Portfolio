import React from 'react'
import logoImage from './assets/images/userAsset/gourav.png (1).png'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="navbar ">

<div className="logo-container">
   <img src={logoImage} className="logo"></img>
   <div className="logo-text">ourav Chandravnshi</div>
</div>

<div className="nav-items">
   <div ><a href="#projects">Projects</a></div>
   <div ><a href="#skills">Skills</a></div>
   <div ><a href="#contactme">Contact Me</a></div>
   
</div>


</div>
    </div>
  )
}

export default Navbar
