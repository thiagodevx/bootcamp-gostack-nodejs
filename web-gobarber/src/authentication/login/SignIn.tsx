import React, { useRef, useContext } from 'react'
import logoImg from '../../images/logo.svg'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import './SignIn.scss'
import Button from '../../shared/Button'
import Input from '../../shared/Input'
import { FormHandles } from '@unform/core'
import treatErrorOnForm from '../../shared/functions/treatErrorOnForm'
import AuthContext from '../context/AuthContext'

export default () => {
  const formRef = useRef<FormHandles>(null)
  const authContext = useContext(AuthContext)
  const signInAction = async (data: any) => {
    console.log(data)
    formRef.current?.setErrors({})
    const signUpSchema = Yup.object().shape({
      email: Yup.string().email('Digite um e-mail válido').required('Email obrigatório'),
      password: Yup.string().required('Senha obrigatória')
    })
    try {
      await signUpSchema.validate(data, { abortEarly: false })
    } catch (error) {
      const errors = treatErrorOnForm(error)
      formRef.current?.setErrors(errors)
    }
  }

  return (
    <div className='sign-in'>
      <div className='content'>
        <img src={logoImg} alt='GoBarber' />
        <Form ref={formRef} onSubmit={signInAction}>
          <h1>Faça seu logon</h1>
          <Input name='email' type='text' placeholder='E-mail' icon={FiMail} />
          <Input name='password' type='password' placeholder='Senha' icon={FiLock} />
          <Button type='submit'>Entrar</Button>
          <a href='forgot' className='forgot-password'>
            Esqueci minha senha
          </a>
        </Form>
        <a href='criar-conta' className='create-account'>
          <FiLogIn />
          Criar Conta
        </a>
      </div>
      <div className='background'></div>
    </div>
  )
}
