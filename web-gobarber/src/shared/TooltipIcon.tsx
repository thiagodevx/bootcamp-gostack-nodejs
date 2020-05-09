import React, { useState } from 'react'
import { IconBaseProps } from 'react-icons/lib/cjs'
import './TooltipIcon.scss'
interface TooltipProps {
  icon: React.ComponentType<IconBaseProps>
  message: string
}
export default (props: TooltipProps) => {
  const Icon = props.icon
  const [visible, setVisible] = useState(false)
  const visibleClass = visible ? 'visible' : 'invisible'
  return (
    <div className='tooltip-container' onMouseOver={() => setVisible(true)} onMouseOut={() => setVisible(false)}>
      <Icon className='tooltip-icon'></Icon>
      <span className={`message ${visibleClass}`}>{props.message}</span>
    </div>
  )
}
