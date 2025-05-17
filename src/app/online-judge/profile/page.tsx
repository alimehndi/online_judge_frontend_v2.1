import Footer from '@/app/components.tsx/Footer'
import Header from '@/app/components.tsx/Header'
import DarkModeToggle from '@/app/darkModeToggle'
import React from 'react'

const profile = () => {
  return (
    <div>
      <DarkModeToggle />
      <Header />
      profile
      <Footer />
    </div>
  )
}

export default profile
