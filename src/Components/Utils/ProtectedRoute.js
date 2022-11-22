import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Common/Header'
import Sidebar from '../../Common/Sidebar/Sidebar'
import './Utils.css'

export default function ProtectedRoute() {
  return (
    <>
      <div className='col-md-12'>
      <div className='d-flex'>

        <div className='side-width'>
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
