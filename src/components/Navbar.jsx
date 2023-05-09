import React from 'react'
import {useState} from 'react'

const Navbar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userName, setUserName] = useState('')

    const handleClick = () => {
        setIsLoggedIn((prevState) => !prevState);
        if(!isLoggedIn){
            setUserName('Frida')
        }
      };

    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <img src="" alt="" />
  
            <a className="navbar-brand" href="#">Movies</a>
            
        
            {isLoggedIn ? <p className='text-btn'>{userName}</p>: 
            <button onClick={handleClick} className='navbar-btn'>Logga in</button>}
        </nav>
        </div>
    )
}

export default Navbar