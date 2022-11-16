import React from 'react'
import { Link } from 'react-router-dom'
import BuyToken from '../BuyToken/BuyToken'
import Section1 from './Section1'
import WidhdrawToken from './WidhdrawToken'
import './Dashboard.css'
import Transaction from '../Transactions/Transaction'
import DepositEth from './DepositEth'

export default function Dashboard() {
  return (
    <>
      <div className="pagetitle dashboard-body ">
      <div className='w-25 mx-5 py-5 '>

        <h1 style={{ color: 'rgba(255, 255, 255, 0.781)' }}>Dashboard</h1>
        <nav>
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item active">
              <Link href="/dashboard" style={{textDecoration: 'none'}}>dashboard</Link>
            </li>
            {/* <li className="breadcrumb-item">Users</li> */}
            {/* <li className="breadcrumb-item active">Profile</li> */}
          </ol>
        </nav>
      </div>
      </div>
      <Section1 />
      <WidhdrawToken />
      <DepositEth />
      {/* <BuyToken /> */}
      {/* <Transaction /> */}
    </>
  )
}
