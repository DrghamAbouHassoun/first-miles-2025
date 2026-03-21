import React, { type HTMLAttributes } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

const Container = ({ children, ...props }: ContainerProps) => {
  return (
    <div {...props} className={`w-full max-w-337.5 mx-auto px-4 ${props.className}`}>
        {children}
    </div>
  )
}

export default Container