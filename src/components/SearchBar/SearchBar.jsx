import React from 'react'
import './index.scss'
import userIcon from '../../assets/icons/userIcon.svg'
import heart from '../../assets/icons/heart.svg'
import lupa from '../../assets/icons/lupa.svg';

const SearchBar = () => {
  return (
    <div className='search-bar-group'>
        <div className='border-input'>
            <img src={lupa} alt="Lupa Icon" />
            <input type="text" name="search" id="search" placeholder='O que você está procurando?'/>
        </div>
        <img src={userIcon} alt="User Icon" />
        <img src={heart} alt="Heart Icon" />
    </div>
  )
}

export default SearchBar