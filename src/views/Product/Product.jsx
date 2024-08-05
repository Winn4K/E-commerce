import React from 'react'
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu'
import SearchBar from '../../components/SearchBar/SearchBar'
import ProductDetails from '../../components/ProductDetails/ProductDetails'
import { useParams } from 'react-router-dom'

const Product = ( {data} ) => {

  console.log(data) 

  const { productId } = useParams();
  const selectedProduct = data.find(product => product.id == productId);

  return (
    <div>
      <HeaderMenu/>
      <SearchBar/>
      <ProductDetails data={selectedProduct}/>
    </div>
  )
}

export default Product