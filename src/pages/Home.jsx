import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Table from '../components/Table'

const Home = () => {
  return (
    <div className='main-bg z-10'>
      <Navbar />
      <Hero />
      {/* <Table /> */}
    </div>
  )
}

export default Home