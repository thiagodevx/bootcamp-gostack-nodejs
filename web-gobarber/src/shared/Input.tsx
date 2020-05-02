import React, { useEffect, useRef } from 'react'
import { IconBaseProps } from 'react-icons/lib/cjs'
import { useField } from '@unform/core'
import './Input.scss'

interface InputProps {
  name: string
  type?: string
  placeholder?: string
  icon: React.ComponentType<IconBaseProps>
}
export default (props: InputProps) => {
  const field = useField(props.name)
  const inputRef = useRef(null)
  useEffect(() => {
    field.registerField({ name: field.fieldName, ref: inputRef.current, path: 'value' })
  }, [field])
  const Icon = props.icon
  return (
    <div className='default-input-container'>
      <Icon />
      <input
        className='default-input'
        name={props.name}
        type={props.type || 'text'}
        placeholder={props.placeholder || ''}
        ref={inputRef}
      ></input>
    </div>
  )
}
