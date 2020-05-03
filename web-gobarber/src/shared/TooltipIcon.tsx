import React from 'react'
import { IconBaseProps } from 'react-icons/lib/cjs'

interface TooltipProps {
  icon: React.ComponentType<IconBaseProps>
  message: string
}
export default (props: TooltipProps) => {
  const Icon = props.icon
  return (
    <div>
      <Icon className='tooltip-icon'></Icon>
      <span>{props.message}</span>
    </div>
  )
}
