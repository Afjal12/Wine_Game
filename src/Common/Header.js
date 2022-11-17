import { ethers } from 'ethers';
import React, { useState } from 'react'
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Web3WalletContext } from '../Context/UseContext';


export default function Header() {

  const { example, userConnected, accountAddress, walletConnected, ProvidermetamaskLogin, disconnectUser, getMetamaskAccount, WalletBalance } = useContext(Web3WalletContext);

  return (

    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">

            <img src="https://jkscoinworld.com/wp-content/uploads/2018/05/2013-a-1.jpg" style={{width: '2.5rem'}} alt="Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/bet">Bet</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/coin">Coin</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/buy-token">Buy Token</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/">Log Out</Link>
              </li> */}
              {/* <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            {/* <button className='btn btn-outline-succes mx-3' >Connect Wallet</button> */}

            {
              userConnected && accountAddress ?
                <button className='btn btn-outline-succes mx-3'
                  onClick={disconnectUser}>
                  {` ${accountAddress.substring(0, 10)}...Disconnect`}
                </button>
                :
                <button className='btn btn-outline-succes mx-3' onClick={ProvidermetamaskLogin} >Connect Wallet</button>
            }
          </div>
        </div>
      </nav>



      {/* <button onClick={onClick}>
      {buttonText}
    </button> */}


    </>
  )
}
