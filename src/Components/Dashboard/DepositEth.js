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
        toast.info('Connect your wallet First')
    }
    return (
        <>
            <div title='Deposit Eth' className='d-flex dashboard-body pt-3 justify-content-between'>
                <div className='card-width  font-token p-4 token-border  '>
                    <form>
                        <h1 className='text-center text-primary'>Deposit Eth</h1>
                        <p>Network : Matic</p>

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

                            <button className='btn btn-primary w-100' onClick={userConnected == true ? ClickDepositEth : showError}>Submit</button>
                        </p>
                    </form>
                </div>

            </div>
        </>
    )
}
