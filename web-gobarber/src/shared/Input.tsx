import React from 'react'
import { IconBaseProps } from 'react-icons/lib/cjs'
import './Input.scss'

interface InputProps {
  name: string
  type?: string
  placeholder?: string
  icon: React.ComponentType<IconBaseProps>
}
export default (props: InputProps) => {
  const Icon = props.icon
  return (
    <div className='default-input-container'>
      <Icon />
      <input
        className='default-input'
        name={props.name}
        type={props.type || 'text'}
        placeholder={props.placeholder || ''}
      ></input>
    </div>
  )
}
