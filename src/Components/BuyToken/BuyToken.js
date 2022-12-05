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
import { toast } from 'react-toastify';


export default function BuyToken() {
    const {
        getToken,
        buyTokenHash,
        buyTokenDisable,
        matic,
        readBalanceOf,
        setMatic,
        token,
        symbol,
        setToken,
        handleSetMatic
    } = useContext(ContractFunctionsContext);
    const {
        userConnected,
        ProvidermetamaskLogin,
        WalletBalanceInNumber
    } = useContext(Web3WalletContext);

    const handleMatic = (e) => {
        handleSetMatic(e)
    }

    const showError = (e) => {
        e.preventDefault()
        console.log('Jaadu');

        if (+matic == 0) {
            toast.warn('Enter a greater than 0 amount')
        }
        else if (+matic > +WalletBalanceInNumber) {
            toast.warn('!Sorry do not have enough Matic')
        }
    }

  
    const txUrl = 'https://mumbai.polygonscan.com/tx'

    const viewTx = () =>{
        window.open(`${txUrl}/${buyTokenHash}`,'_blank')
    }


    return (
        <>
        
            <section title='Buy Token' id='buy-token' className='game-body ' >
                <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close" ><i className="fa-solid fa-xmark"></i></button>

                <div className='m-0  p-0 text-white w-100 mx-auto my-auto '>
                    <div className='w-100  p-3 ' style={{
                        border: '2px solid #454cff',
                        borderRadius: '10px',
                    }}>
                        <h1 className=' text-primary text-center mt-5'>Buy Token Form</h1>
                        {/* <p className='text-center pt-2'> 1 Matic = 80 {symbol}</p> */}
                        <form >

                            <div className='mt-5'>
                                <p className='m-0 ' >How much you want to Convert Matic</p>
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
                                <p className='m-0'>You will get token </p>

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
                            <div className='d-flex justify-content-between my-3 p-2 mx-3'>
                            <div className='w-50'>
                                <span className='span-bold'>1 Matic</span><br />
                                <span>80 {symbol}</span>
                            </div>
                            <div className='w-50'>
                                <span className='span-bold'>Buy Token Fee</span><br />
                                <span>3 %</span>

                            </div>

                        </div>
                            <p className='text-center mt-5 '>
                                {userConnected == true ?
                                    <button className='btn btn-warning  mx-4' disabled={buyTokenDisable} onClick={+matic > 0 && +matic <= +WalletBalanceInNumber ? getToken : showError}>Buy Token</button>
                                    :
                                    <button className='btn btn-primary mx-4' onClick={ProvidermetamaskLogin} >Connect Wallet</button>
                                }
                                {  
                                    buyTokenHash ? <button className='btn btn-success mx-4' onClick={viewTx}>View Transaction</button>:''
                                }
                            </p>
                        </form>
                    </div>
                </div>

            </section>
        </>
    )
}
