import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Common/Header'

export default function ProtectedRoute() {
  return (
    <>
        <div className='col-md-12'>
                    <Header />
                    <Outlet />
        </div>
    </>
  )
}
