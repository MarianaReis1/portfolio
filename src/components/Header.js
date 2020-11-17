import React, { useState } from 'react'
import './Header.css'
import Logo from '../media/logo-green.png'
import IconWorks from '../media/IconWorks'
import IconAbout from '../media/IconAbout'
import IconEmail from '../media/IconEmail'
import IconGithub from '../media/IconGithub'
import IconLinkedin from '../media/IconLinkedin'
import BurguerIcon from '../media/burguer-icon.png'
import XIcon from '../media/x-icon.png'


function copyEmailToClipboard() {
    let email = document.querySelector('#email')
    console.log(email);
    email.select()
    document.execCommand("copy");
}

export default function Header(){

    const [isActive, setActive] = useState("false")
    const handleShowMenu = () => {
        setActive(!isActive)
    }

    let isMobileSize = window.innerWidth < 768;
    
    return (
        <div className="header">
            <img className="header__logo" src={Logo} alt="Logo" >
                {/* <a href="/home" ></a> */}
            </img>
            <ul className={isMobileSize && !isActive ? "header__list" : "header__list--desktop header__list--hidden" }>
                <a><li className="header__item">
                    <IconAbout />
                </li></a>
                <a><li className="header__item">
                    <IconWorks />
                </li></a>
                <li className="header__item header__icon-email">
                    <a><IconEmail className="header__icon-email" /></a>
                        <span className="header__icon-email--tooltip" onClick={() => copyEmailToClipboard()}>
                            You can click here to copy my email! :)
                            <input id="email" type="text" value="marianaluizamr@gmail.com" readOnly></input>
                        </span>
                </li>
                <a><li className="header__item">
                    <IconGithub />
                </li></a>
                <a><li className="header__item">
                    <IconLinkedin />
                </li></a>
            </ul>
            <div className="header__burguerX-icon" >
                
                <img className="header__burguerX-icon-img" onClick={() => handleShowMenu()} src={isActive ? BurguerIcon : XIcon} alt="Hamburguer Icon" />
                
            </div>
        </div>
    )
}

// to do list :
    // add links
