import React, { type ReactNode } from 'react'

import { cn } from '@react-monorepo/core-utils'

interface ICardProps {
  children: ReactNode
  className?: string
}
export function Card({ children, className }: ICardProps) {
  return (
    <div
      className={cn('min-w-52 min-h-52 p-2 rounded-lg shadow-md', className)}
    >
      {children}
    </div>
  )
}

export default React.memo(Card)
