import React from 'react'
import './styling/header.css'
import {Link} from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import {useStateValue} from "../utils/StateProvider"
import { auth } from './config/firebase'

function Header() {

    // useStateValue contains the state and dispatch
    const [{basket, user}] = useStateValue()

    console.log(basket)


    const login =() => {
        if(user){
            auth.signOut()
        }
    }


    return (
        <nav className="header">
            <Link to="/">
                <img className ="header__logo" src="http://pngimg.com/uploads/dog/dog_PNG181.png" alt="logo puppy!"></img>
            </Link>
            
            {/* Search Bar */}
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>

            {/* Nav buttons */}
            <div className="header__nav">
                {/* making the link show only when user is not logged in */}
                <Link to={!user && "/login"} className="header__link">
                    {/* setting onlick to login */}
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {user?.email}</span>
                        <span className="header__optionLineTwo">{user ? "Sign out" : "Sign In"}</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header__optionLineTwo header__basketCount">{basket?.length} </span>
                    </div>
                </Link>
            </div>
            
      </nav>
    )
}

export default Header;


