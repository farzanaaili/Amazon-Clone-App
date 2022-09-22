import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <img alt='logo' className='header__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'>
        </img>
        <div className='header__search'>
            <input className='header__searchInput' type="text"></input>
        </div>
        <div className='header__nav'>
            <div className='header__option'>
                <span className='header__optionLineOne'>Hello</span>
                <span className='header__optionLineOne'>Sign In</span>

            </div>
            <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
                <span className='header__optionLineOne'> & Orders</span>
            </div>
            <div className='header__option'>
            <span className='header__optionLineOne'>Yours</span>
                <span className='header__optionLineOne'> Prime</span>
            </div>
        </div>
    </div>
  )
}

export default Header