import React from 'react'
import logoImg from '../assets/logo.svg'
import { FiLogIn } from 'react-icons/fi'
import './SignIn.scss'

export default () => (
  <div className='sign-in'>
    <div className='content'>
      <img src={logoImg} alt='GoBarber' />
      <form>
        <h1>Faça seu logon</h1>
        <input type='text' placeholder='E-mail' />
        <input type='password' placeholder='Senha' />
        <button type='submit'>Entrar</button>
        <a href='forgot' className='forgot-password'>
          Esqueci minha senha
        </a>
      </form>
      <a href='criar-conta' className='create-account'>
        <FiLogIn />
        Criar Conta
      </a>
    </div>
    <div className='background'></div>
  </div>
)
