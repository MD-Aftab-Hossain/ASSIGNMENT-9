import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet, useNavigation } from 'react-router'
import Footer from '../components/Footer'


const Root = () => {
  return (
    <div className="max-w-[1270px] p-0 mx-auto bg-gray-50">
      <Navbar></Navbar>
      {
        isnaving && <p className='text-2xl font-bold'>Loading..............</p>
      }
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Root