import React from 'react'
import './index.scss';
import ProductCard from '../ProductCard/ProductCard.jsx'

const ProductsContainer = ({ data }) => {

    return (
        <div className='productContainer'>
            {data.map((product) => (
                    <ProductCard 
                        id={product.id} 
                        title={product.title} 
                        path={product.imgPathDetail}
                    />
            ))}
        </div>
    )
}

export default ProductsContainer