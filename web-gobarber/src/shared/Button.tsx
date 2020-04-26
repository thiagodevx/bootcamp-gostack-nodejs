import React from 'react'
import './Button.scss'

interface ButtonProps {
  children: string
}
export default (props: ButtonProps) => (
  <button className='default-button' type='submit'>
    {props.children}
  </button>
)
