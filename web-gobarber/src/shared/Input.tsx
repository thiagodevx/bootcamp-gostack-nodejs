import React from 'react'

interface InputProps {
  type: string
  placeholder: string
}
export default (props: InputProps) => (
  <input className='default-input' type={props.type} placeholder={props.placeholder}></input>
)
