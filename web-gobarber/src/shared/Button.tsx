import React from 'react'
import './Button.scss'

interface ButtonProps {
  children: string
  type?: 'button' | 'submit'
}
export default (props: ButtonProps) => (
  <button className='default-button' type={props.type || 'button'}>
    {props.children}
  </button>
)
