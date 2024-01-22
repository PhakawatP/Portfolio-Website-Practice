import React, { useState, } from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import {FiX,FiMenu} from "react-icons/fi"
import './Header.css'

function Header() {
  const [click,setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className='header'>
      <div className='container'>
          <div className='header-con'>
            <div className='logo-container'>
              <a href='#'>My Portfolio</a>
            </div>
            <ul className={click ? 'menu active' : 'menu'}>
              <div id='about'>
                  <li className='menu-link' onClick={closeMobileMenu}>
                  <a>
                  <ScrollLink className='cursor-pointer'
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={500}
            duration={1000}
          >
            ABOUT
            
                  </ScrollLink>
                  </a>
                  </li>
              </div>

              <div id='skills'>
              <li className='menu-link' onClick={closeMobileMenu}>
              <ScrollLink className='cursor-pointer'
            activeClass='active'
            to='skills'
            spy={true}
            smooth={true}
            offset={1200}
            duration={1000}
          >
            SKILLS
          </ScrollLink>
              </li>
              </div>

              <div className='contact' id='contact'>
              <li className='menu-link' onClick={closeMobileMenu}>
              <ScrollLink className='cursor-pointer'
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            offset={1780}
            duration={1000}
          >
            CONTACT
          </ScrollLink>
              </li>
              </div>
              
              
            </ul>
            <div className='mobile-menu' onClick={handleClick}>
              {click ?(
              <FiX />
              ) : (
                <FiMenu />
              )
              }
            </div>
          </div>
      </div>
    </div>
  )
}

export default Header