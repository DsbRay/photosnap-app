import React, { ReactNode } from 'react'
import '../styles/base.css'
import Navbar from './Navbar'

interface PageProps {
  children: ReactNode
}

const Layout: React.FC<PageProps> = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  )
}

export default Layout
