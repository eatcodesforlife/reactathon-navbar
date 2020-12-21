import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from '../data'
import logo from '../logosm.svg'




const Navbar = () => {

    const [ isShowMenu, isSetShowMenu ] = useState(false)
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)


    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height
        if(isShowMenu){
            linksContainerRef.current.style.height = `${linksHeight}px`
        }else{
            linksContainerRef.current.style.height = '0px'
        }
    }, [isShowMenu])

    return (
        <nav className='nav-center'>
            <div className="nav-header">
                <img src={logo} alt="logo"/>
                <button className={`nav-toggle ${isShowMenu && "active-btn"}`} onClick={() => isSetShowMenu(!isShowMenu)}>
                    <FaBars />
                </button>
            </div>
            <div className='links-container' ref={linksContainerRef}>
                <ul className='links' ref={linksRef}>
                    {
                        links.map(({id, url, text}) => (
                            <li key={id}>
                                <a href={url}>{text}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <ul className="social-icons">
                {
                    social.map(({id, url, icon}) =>(
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar
