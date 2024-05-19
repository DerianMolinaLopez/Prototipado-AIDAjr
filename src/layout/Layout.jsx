import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderCurso from '../components/HeaderCurso'
const Layout = () => {
  return (
    <>
    <HeaderCurso/>
       <div className=''>
        <Outlet/>
       </div>
  </>
  )
}

export default Layout
