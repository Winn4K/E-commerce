import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom';

const ProductCard = ( {id, title, path}) => {

  return (
    <div className='productCard'>
        <img src={path} alt="" />
        <div>
            <p>{title}</p>
            <Link to={`/product/${id}`}><button>Comprar Look</button></Link>
        </div>
    </div>
  )
}

export default ProductCard