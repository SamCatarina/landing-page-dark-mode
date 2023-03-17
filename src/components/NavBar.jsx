import React from 'react'
import { Nav,
    NavElements,
    Logo,
    Mode,
    NavLinks,
    MobileIcon,
    NavMobile} from './NavBar.style'

import {FaBars, FaTimes, FaMoon, FaSun} from 'react-icons/fa'
import { useRef, useState } from 'react'
import logo from '../assets/logo.png'
import { light, dark } from './Theme'

function NavBar(props) {
    const navRef = useRef();
    const [icon, setIcon] = useState(false);
    const [iconMode, setIconMode] = useState(true);


    const seticonmode = () => {
        setIconMode(!iconMode);
    }


    const showNav = () =>{
        navRef.current.classList.toggle("mobile");
        setIcon(!icon);

        // to hidden the overflow when the menu is open
        if(!icon){
          document.getElementById('body').style.overflowY = "hidden";
        }else{
          document.getElementById('body').style.overflowY = "";
        }
    }
  return (
    <>
    <NavMobile>
   <Nav  ref={navRef}>
      <NavElements>
        <Logo> 
        <img src={logo} alt="logo" />
        </Logo>

        <NavLinks onClick={showNav}>
            <a href="#"> Home </a>
            <a href="#"> About </a>
            <a href="#"> Contact </a>

          <Mode onClick={() => {return(<>{props.mode==dark? props.setMode(light) : props.setMode(dark)}<div>
            {seticonmode()}
          </div>
          </>)}}>
            {iconMode? <FaMoon/> : <FaSun/>}
          </Mode>

        </NavLinks>

        
        <MobileIcon onClick={showNav}>
        {icon? <FaTimes/> : <FaBars/>}
        </MobileIcon>
        
        
      </NavElements>
    </Nav>
    </NavMobile>
    
    </>
  )
}

export default NavBar