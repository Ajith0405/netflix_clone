import React, { useEffect, useState } from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
const Nav = () => {
    const [show,setShow] = useState(false)
    const transitionNavbar = ()=>{
        if(window.scrollY > 100 ){
            setShow(true)
        }else{
            setShow(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",transitionNavbar);

        return ()=> window.removeEventListener("scroll",transitionNavbar);
    })

    console.log(show);
  return (
    <div>
        <nav className={`nav ${show && "nav_black"}`}>
            <div className='nav_contents'>
                <Link to="/">
                <img className='nav_logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='logo'/>
                </Link>
                <Link to='/profile'>
                <img className='nav_avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='avatar'/>
                </Link>
            </div>

        </nav>
    </div>
  )
}

export default Nav