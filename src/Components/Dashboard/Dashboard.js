import React from 'react'
import { Link } from 'react-router-dom'
import Section1 from './Section1'
import './Dashboard.css'
import Section2 from './Section2'

export default function Dashboard() {
  return (
    <>
      <div className="pagetitle dashboard-body ">
        <div className='w-25 mx-5 py-5 '>
          <h1 style={{ color: 'rgba(255, 255, 255, 0.781)' }}>Dashboard</h1>
          <nav>
            <ol className="breadcrumb m-0">
              <li className="breadcrumb-item active">
                <Link href="/" style={{ textDecoration: 'none' }}>Dashboard</Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <Section1 />
      <Section2 />
    </>
  )
}
