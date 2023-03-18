import React from 'react'
import { P } from './styles'

type Props = {
  children: React.ReactNode
  className?: string
}

const Paragrafo = ({ children, className }: Props) => {
  return <p className={className}>{children}</p>
}

export default Paragrafo
