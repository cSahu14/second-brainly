import React from 'react'
import Logo from '../componenets/Logo'
import SubHeaders from '../componenets/SubHeaders'
import Navbar from '../componenets/Navbar'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <main className='h-screen flex justify-between w-full'>
        <section className=' w-80 h-full'>
          <Logo/>
          <div className='flex flex-col mt-8'>
            <SubHeaders/>
          </div>
        </section>
        <section className='bg-gray-100 w-[85vw] h-full'>
          <Navbar/>
          <Outlet/>
        </section>
      </main>
  )
}

export default HomeLayout