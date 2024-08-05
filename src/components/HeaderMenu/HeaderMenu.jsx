import React from 'react'
import './index.scss'
import dnc from '../../assets/imgs/ClothingStore.png'
import trolley from '../../assets/icons/trolley.svg'
import { Link } from 'react-router-dom'

const HeaderMenu = () => {
  return (
    <div className='header'>
      <div className='header-menu'>
        <div>
          <Link to='/home'><img src={dnc} alt="" /></Link>
        </div>
        <ul>
          <li><strong>Home</strong></li>
          <li>Novidades</li>
          <li>Feminino</li>
          <li>Masculino</li>
          <li>Atendimento</li>
        </ul>
      </div>
      <div className='trolley'>
        <h5>Meu Carinho</h5>
        <img src={trolley} alt="" className='trolley-icon' />
      </div>
    </div>
  )
}

export default HeaderMenu