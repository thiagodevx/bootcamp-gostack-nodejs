import React from 'react'
import logoImg from '../assets/logo.svg'
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import './SignUp.scss'
import Button from '../shared/Button'
import Input from '../shared/Input'

export default () => {
  const signUp = (data: any) => {
    const signUpSchema = Yup.object().shape({
      name: Yup.string().required('Nome obrigatório'),
      email: Yup.string().email('Digite um e-mail válido').required('Email obrigatório'),
      password: Yup.string().min(6, 'O campo senha deve ter no mínimo 6 caracteres')
    })
    signUpSchema.validate(data, { abortEarly: false }).then(console.log).catch(console.log)
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
