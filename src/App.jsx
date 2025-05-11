import React from 'react'
import Navbar from './components/ui/common/Navbar'
import Footer from './components/ui/common/Footer'
import AppRoutes from './Routes/AppRoutes'

export default function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  )
}
