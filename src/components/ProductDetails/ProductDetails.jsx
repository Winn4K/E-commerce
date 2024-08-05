import React from 'react'
import './index.scss'
import Colors from '../Colors/Colors'
import Sizes from '../Sizes/Sizes'
import { Link } from 'react-router-dom'

const ProductDetails = ( {data} ) => {

  return (
    <div className='productDetails'>

        <div>
            <div className='productCards'>
            <img src={data.imgPathDetail} alt="" />
            <div>
                <p>{data.title}</p>
            </div>
            </div>
            <div className='descricption'>
                <h4>Descrição</h4>
                <p>{data.title}</p>
            </div>
        </div>

        <div className='productInformation'>
            <div>
                <h3>Informações sobre o Produto</h3>
            </div>
            <h2>R$ {data.price}</h2>
            <h5>Cor: {data.colors.lenght === 1 ?
                data.colors.map((color, index) => (
                    <span key={index}> {color} </span>
                )) 
                : data.colors.map((color, index) =>
                    index + 1 === data.colors.length ? (
                        <span key={index}>{color}</span>
                    ) : (
                        <span key={index}>{color}, </span>
                    )
                )}
            </h5>
            <Colors data={data}/>
            <h5>Tamanho:</h5>
            <Sizes data={data}/>
            <div>
                <Link to={'/pay/' + data.id}><button>Finalizar Compra</button></Link>
            </div>
        </div>

    </div>
  )
}

export default ProductDetails