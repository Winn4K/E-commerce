import React from 'react'
import './index.scss'
import dnc from '../../assets/imgs/ClothingStore.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <Link to='/home'><img src={dnc} alt="" /></Link>
    </div>
  )
}

export default Header