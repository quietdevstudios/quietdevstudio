import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <h1 className='text-center text-3xl text-orange-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        We're Launching Soon...
      </h1>
      <Footer />
    </>
  )
}

export default App 
