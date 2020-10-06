import React from 'react'
import './styling/header.css'
import {Link} from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search"

function Header() {
    return (
        <nav className="header">
            <Link>
                <img className ="header__logo" src="http://pngimg.com/uploads/dog_collar/dog_collar_PNG38.png" alt="logo puppy!"></img>
            </Link>
            
            {/* Search Bar */}
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            
        </nav>
    )
}

export default Header;


