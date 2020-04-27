import React from 'react'
import logoImg from '../assets/logo.svg'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import './SignIn.scss'
import Button from '../shared/Button'
import Input from '../shared/Input'

export default () => (
  <div className='sign-in'>
    <div className='content'>
      <img src={logoImg} alt='GoBarber' />
      <form>
        <h1>Faça seu logon</h1>
        <Input name='email' type='text' placeholder='E-mail' icon={FiMail} />
        <Input name='password' type='password' placeholder='Senha' icon={FiLock} />
        <Button>Entrar</Button>
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
