import { ethers } from 'ethers'
import React from 'react'
import { Contract_Address } from '../Utils/CommonConstant';
import './BuyToken.css'
import SmartContractABI from "../Utils/ContractAbi.json";
import { useContext } from 'react';
import { Web3WalletContext } from '../../Context/UseContext';
import { useState } from 'react';
import { useEffect } from 'react';
import { ContractFunctionsContext } from '../Utils/ContractFunctions';
import { Link } from 'react-router-dom';


export default function BuyToken() {
    const {
        getToken,
        matic,
        setMatic,
        token,
        setToken,
        handleSetMatic
    } = useContext(ContractFunctionsContext);
    const { userConnected, ProvidermetamaskLogin } = useContext(Web3WalletContext);




    const handleMatic = (e) => {
        handleSetMatic(e)
    }





    return (
        <section title='Buy Token' id='buy-token' className='game-body '>

            {/* <div className="pagetitle text-light">
                <div className='w-25 mx-5 py-5 '>

                    <h1 style={{ color: 'rgba(255, 255, 255, 0.781)' }}>Buy Token</h1>
                    <nav>
                        <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item active">
                                <Link to="/" style={{textDecoration: 'none'}}>dashboard</Link>
                            </li>
                            <li className="breadcrumb-item ">Buy-Token</li>
                        </ol>
                    </nav>
                </div>
            </div> */}
            <div className='m-0  p-0 text-white d-flex h-100'>
                <div className='w-100  p-3 ' style={{
                    border: '2px solid #454cff',
                    borderRadius: '20px',
                }}>
                    <h1 className='token-border text-primary text-center mt-5'>Buy Token Form</h1>
                    <p className='text-center pt-2'> 1 Matic = 80 token</p>
                    <form >

                        <div className='mt-5'>
                            <p className='m-0' >How much you want to Convert Matic</p>
                            <input
                                name='matic'
                                id='matic'
                                // readOnly={true}
                                type="number"
                                className='token-border form-control bg-dark text-white'
                                value={matic}
                                placeholder='Enter Amount in Matic'
                                onChange={handleMatic}
                            />
                        </div>

                        <div className='mt-5'>
                            <p className='m-0'>You will get token</p>

                            <input
                                name='token'
                                id='token'
                                readOnly
                                type="number"
                                value={token}
                                className='token-border form-control bg-dark text-white'
                                placeholder='Token'
                            // onChange={handleToken}
                            />
                        </div>
                        <p className='text-center mt-5'>
                            {userConnected == true ?
                                <button className='btn btn-warning  ' onClick={getToken}>Buy Token</button>
                                :
                                <button className='btn btn-primary' onClick={ProvidermetamaskLogin} >Connect Wallet</button>
                            }
                        </p>
                    </form>
                </div>
            </div>

        </section>
    )
}
