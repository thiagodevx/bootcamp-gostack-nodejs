import React from 'react'

interface InputProps {
  name: string
  type?: string
  placeholder?: string
}
export default (props: InputProps) => (
  <input
    className='default-input'
    name={props.name}
    type={props.type || 'text'}
    placeholder={props.placeholder || ''}
  ></input>
)
