import React from 'react'
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu'
import SearchBar from '../../components/SearchBar/SearchBar'
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer'

const Home = ( {data} ) => {

  return (
    <div>
        <HeaderMenu/>
        <SearchBar/>
        <ProductsContainer data={data}/>
    </div>
  )
}

export default Home