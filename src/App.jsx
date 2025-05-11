import React from 'react'
import Navbar from './components/ui/common/Navbar'
import Footer from './components/ui/common/Footer'
import AppRoutes from './Routes/AppRoutes'
import { Flex } from '@chakra-ui/react'

export default function App() {
  return (
    <>
      <Navbar />
      <Flex height={"100vh"}>
        <AppRoutes />
      </Flex>
      <Footer />
    </>
  )
}
