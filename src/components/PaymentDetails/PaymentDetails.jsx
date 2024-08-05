import React from 'react'
import './index.scss'

const PaymentDetails = ({data}) => {

    return (
        <div className='paymentDetails'>
            <div className='PaymentInformation'>
                <div className='campos'>
                    <label htmlFor="nome">Nome:</label> <br />
                    <input type="text" name="nome" id="nome" placeholder='Nome completo' />
                </div>

                <div className='campos'>
                    <label htmlFor="endereco">Endereço de entrega:</label> <br />
                    <input type="text" name="endereco" id="endereco" placeholder='Endereço de entrega' />
                </div>

                <div>
                    <label htmlFor="pagamento">Forma de Pagamento:</label> <br />
                    <div className='formasDePagamento'>
                        <div className='formasDePagamento--options'>
                            <input type="radio" id="pix" name="pagamento" value="pix" />
                            <label htmlFor="pix">Pix</label>
                        </div>
                        
                        <div className='formasDePagamento--options'>
                            <input type="radio" id="boleto" name="pagamento" value="boleto" />
                            <label htmlFor="boleto">Boleto</label>
                        </div>
                        
                        <div className='formasDePagamento--options'>
                            <input type="radio" id="cartaoCredito" name="pagamento" value="cartaoCredito" />
                            <label htmlFor="cartaoCredito">Cartão de Credito</label>
                        </div>
                        
                    </div>

                </div>
            </div>

            <div className='orderSumary'>
                <div className='orderSumary__container'>
                    <h4 className='orderSumary--title'>Resumo do Pedido:</h4>
                    <div className='orderSumary--firstLine'>
                        <p>Produtos (1):</p>
                        <h4>{`R$ ${data.price}`}</h4>
                    </div>
                    <div>
                        <p>Total:</p>
                        <h4>{`R$ ${data.price}`}</h4>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PaymentDetails