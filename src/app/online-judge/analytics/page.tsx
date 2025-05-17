import Footer from '@/app/components.tsx/Footer'
import Header from '@/app/components.tsx/Header'
import DarkModeToggle from '@/app/darkModeToggle'
import React from 'react'

const analytics = () => {
  return (
    <div>
        <DarkModeToggle />
        <Header/>
      analytics
      <Footer/>
    </div>
  )
}

export default analytics
