import React, { memo } from 'react'

import { NavBar } from '@react-monorepo/core-ui'

// type interface

export interface ILayoutProps {
  children?: React.ReactNode
}

function Layout({ children }: ILayoutProps): JSX.Element {
  return (
    <>
      <NavBar />
      <div className="h-[calc(100vh-40px)]">{children}</div>
    </>
  )
}

export default memo(Layout)
