import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import Header from '../../components/Header/Header'

const Login = () => {

  return (
    <div className='login'>

      <Header/>

      <h2>Acesse com seu login ou cadastre-se!</h2>
      <h5>você pode entrar com o seu CPF</h5>
      <form>

        <div className='campos'>
          <label htmlFor="cpf">Digite seu CPF:</label> <br/>
          <input type="text" name="cpf" id="cpf" placeholder='Nome completo'/>
        </div>
        <div className='campos'>
          <label htmlFor="senha">Senha:</label> <br/>
          <input type="password" name="senha" id="senha" placeholder='************'/>
        </div>

        <Link to='/home'>
          <button>Entrar</button>
        </Link>

      </form>

      

    </div>
  )
}

export default Login