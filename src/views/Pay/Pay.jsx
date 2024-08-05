import React from 'react'
import './index.scss'
import Header from '../../components/Header/Header'
import PaymentDetails from '../../components/PaymentDetails/PaymentDetails'
import { useParams } from 'react-router-dom'

const Pay = ( {data} ) => {
  
  const productId = useParams().PaymentId;
  const selectedProduct = data.find(product => product.id == productId);

  return (
    <div>
      <Header />
      <PaymentDetails data={selectedProduct}/>
      <button className='paymentButton' id='enviarPedido'>Enviar Pedido</button>
    </div>
    )
}

      export default Pay