import React, { useRef } from 'react'
import logoImg from '../assets/logo.svg'
import { FormHandles } from '@unform/core'
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import './SignUp.scss'
import Button from '../shared/Button'
import Input from '../shared/Input'
import treatErrorOnForm from '../shared/functions/treatErrorOnForm'

export default () => {
  const formRef = useRef<FormHandles>(null)

  const signUp = async (data: any) => {
    formRef.current?.setErrors({})
    const signUpSchema = Yup.object().shape({
      name: Yup.string().required('Nome obrigatório'),
      email: Yup.string().email('Digite um e-mail válido').required('Email obrigatório'),
      password: Yup.string().min(6, 'O campo senha deve ter no mínimo 6 caracteres')
    })
    try {
      await signUpSchema.validate(data, { abortEarly: false })
    } catch (error) {
      const errors = treatErrorOnForm(error)
      formRef.current?.setErrors(errors)
    }
  }

  return (
    <div className='sign-up'>
      <div className='content'>
        <img src={logoImg} alt='GoBarber' />
        <Form onSubmit={signUp} ref={formRef}>
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
