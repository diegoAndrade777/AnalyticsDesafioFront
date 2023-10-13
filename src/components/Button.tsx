import React from 'react'

interface Props {
  children?: React.ReactNode
  buttonType: string
  onClick?: () => void
  isHidden?: string
}

const Button: React.FC<Props> = ({
  children,
  buttonType,
  isHidden,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={`${isHidden} ${
        buttonType === 'start'
          ? 'bg-green-500'
          : 'bg-orange-500 w-20 h-10 items-center text-xs'
      }`}
    >
      {children}
    </button>
  )
}

export default Button
