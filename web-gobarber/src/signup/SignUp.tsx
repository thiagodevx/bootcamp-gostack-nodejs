import React from 'react'
import logoImg from '../assets/logo.svg'
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import { Form } from '@unform/web'
import './SignUp.scss'
import Button from '../shared/Button'
import Input from '../shared/Input'

export default () => {
  const signUp = (data: any) => {
    console.log(data)
  }
  return (
    <div className='sign-up'>
      <div className='content'>
        <img src={logoImg} alt='GoBarber' />
        <Form onSubmit={signUp}>
          <h1>Faça seu cadastro</h1>
          <Input name='name' type='text' placeholder='Name' icon={FiUser} />
          <Input name='email' type='email' placeholder='E-mail' icon={FiMail} />
          <Input name='password' type='password' placeholder='Senha' icon={FiLock} />
          <Button type='submit'>Cadastrar</Button>
        </Form>
        <a href='voltar-logon' className='go-back'>
          <FiArrowLeft />
          Voltar para tela de login
        </a>
      </div>
      <div className='background'></div>
    </div>
  )
}
