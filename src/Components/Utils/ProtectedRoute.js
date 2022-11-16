import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Common/Header'
import Sidebar from '../../Common/Sidebar/Sidebar'

export default function ProtectedRoute() {
  return (
    <>
      <div className='col-md-12'>
      <div className='d-flex'>

        <div style={{width: '65px'}}>
          <Sidebar />
        </div>
        <div className='w-100'>
        <Header />

        <Outlet />
        </div>
      </div>
      </div>
    </>
  )
}
