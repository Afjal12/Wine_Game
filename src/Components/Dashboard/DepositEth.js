import React from 'react'
import { useState } from 'react';
import { useContext } from 'react'
import { toast } from 'react-toastify';
import { Web3WalletContext } from '../../Context/UseContext';
import { ContractFunctionsContext } from '../Utils/ContractFunctions'

export default function DepositEth() {
    const {
        handleDeposit,
        ClickDepositEth,
        readBalanceOf
    } = useContext(ContractFunctionsContext);
    const ClickDeposit = (e) => {
        e.preventDefault()
        ClickDepositEth(e)
    }
    const {
        userConnected
    } = useContext(Web3WalletContext)

    const [token, setToken] = useState('');
    const handleChange = (e) => {
        handleDeposit(e)
        setToken(e.target.value)
    }
    const showError = (e) => {
        e.preventDefault();
        if (userConnected == !true) {
            toast.info('Connect your wallet First')
        }
        else if (+token < 20) {
            toast.info('Amount must be greater that 20')
        }
        else if (+readBalanceOf < +token) {
            toast.warn('Enter Amount is Invalid')
        }
    }
    return (
        <>

            <div title='Deposit Eth' id='deposit-token' className=' dashboard-body pt-1 justify-content-between h-100'>
                <div className='card-width  font-token p-4 token-border  '>
                    <form>
                        <h1 className='text-center  text-primary'>Deposit Token</h1>
                        <p className='mt-5'>Network : Matic</p>

                        <span>Tokens</span><br />
                        <p>

                            <input required type="number" className='form-control bg-dark text-white' onChange={handleChange} placeholder='No of Tokens' />
                        </p>
                        <div className='d-flex justify-content-between'>

                            <p className='w-50'>
                                <span className='span-bold'>Total Tokens</span><br />
                                <span>{userConnected == true ? readBalanceOf : '-'}</span>

                            </p>
                            <p className='w-50'>
                                <span className='span-bold'>You Deposit Token</span><br />
                                <span>{token}</span>
                            </p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='w-50'>
                                <span className='span-bold'>Minimum Deposit Token</span><br />
                                <span>20</span>
                            </p>
                            <p className='w-50'>
                                <span className='span-bold'>Token Deposit Fee</span><br />
                                <span>3 %</span>

                            </p>

                        </div>
                        <p className='text-center'>
                            <button className='btn btn-primary w-100' onClick={userConnected == true && +token >= 20 && +token <= +readBalanceOf ? ClickDeposit : showError}>Submit</button>
                        </p>
                    </form>
                </div>

            </div>
        </>
    )
}
