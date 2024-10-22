import React, { type ReactNode } from 'react'

interface ICardProps {
  children: ReactNode
  className?: string
}
export function Card({ children }: ICardProps) {
  return <div className="w-52 h-52 p-2 rounded-lg shadow-md">{children}</div>
}

export default React.memo(Card)
