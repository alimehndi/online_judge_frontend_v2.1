import Footer from '@/app/components.tsx/Footer';
import Header from '@/app/components.tsx/Header';
import DarkModeToggle from '@/app/darkModeToggle';
import React from 'react'

const problems = () => {
  return (
    <div>
      <DarkModeToggle />
      <Header />
        Problems
      <Footer />
    </div>
  )
}

export default problems;
