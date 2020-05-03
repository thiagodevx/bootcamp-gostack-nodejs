import React, { useEffect, useRef, useState, useCallback } from 'react'
import { IconBaseProps } from 'react-icons/lib/cjs'
import { useField } from '@unform/core'
import './Input.scss'
import { FiAlertCircle } from 'react-icons/fi'
import Tooltip from './TooltipIcon'

interface InputProps {
  name: string
  type?: string
  placeholder?: string
  icon: React.ComponentType<IconBaseProps>
}
export default (props: InputProps) => {
  const field = useField(props.name)
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const focusedClass = isFocused ? 'focused' : ''
  const errorClass = field.error ? 'error' : ''
  const focusInput = useCallback(() => {
    setIsFocused(true)
  }, [])
  const blurInput = useCallback(() => {
    setIsFocused(false)
    setIsFilled(!!inputRef.current?.value)
  }, [])

  useEffect(() => {
    field.registerField({ name: field.fieldName, ref: inputRef.current, path: 'value' })
  }, [field])

  const Icon = props.icon
  return (
    <div className={`default-input-container ${focusedClass} ${errorClass}`}>
      <Icon className={isFilled || isFocused ? 'focused' : ''} />
      <input
        onFocus={focusInput}
        onBlur={blurInput}
        className='default-input'
        name={props.name}
        type={props.type || 'text'}
        placeholder={props.placeholder || ''}
        ref={inputRef}
      ></input>
      {field.error && <Tooltip message={field.error} icon={FiAlertCircle} />}
    </div>
  )
}
