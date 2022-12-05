import React from 'react'
import { useState } from 'react';
import { useContext } from 'react'
import { Link, Route, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Web3WalletContext } from '../../Context/UseContext';
import { ContractFunctionsContext } from '../Utils/ContractFunctions';
// import '../BuyToken/BuyToken.css'

export default function DepositEth() {

    const [token, setToken] = useState('');
    const {
        handleDeposit,
        ClickDepositEth,
        DepositHash,
        readBalanceOf,
        DepositBtnDisable
    } = useContext(ContractFunctionsContext);
    const ClickDeposit = (e) => {
        e.preventDefault()
        ClickDepositEth(e)
        setToken('')
    }
    const {
        userConnected,
        networkName
    } = useContext(Web3WalletContext)


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


    const txUrl = 'https://mumbai.polygonscan.com/tx'

    const viewTx = () =>{
        window.open(`${txUrl}/${DepositHash}`,'_blank')
    }
    return (
        <>

            <div title='Deposit Eth' id='deposit-token' className=' dashboard-body pt-1 justify-content-between h-100'>
            <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close" ><i className="fa-solid fa-xmark"></i></button>

                <div className='card-width  font-token p-4 token-border  '>
                    <form onSubmit={userConnected == true && +token >= 20 && +token <= +readBalanceOf ? ClickDeposit : showError}>
                        <h1 className='text-center  text-primary'>Deposit Token</h1>
                        <div className='mt-5 mb-3 d-flex justify-content-between'>
                        <span>Network Name : {networkName ? networkName : ''}</span>
                         <span>{readBalanceOf < 20 ? <button className='btn btn-success btn-sm' data-bs-toggle="modal"  data-bs-dismiss="modal"  aria-label="Close" data-bs-target="#BuyToken">Buy Token</button> : ''}</span>
                         </div>

                        <span>Tokens</span><br />
                        <div>

                            <input required type="number" className='form-control bg-dark text-white' value={token}  onChange={handleChange} placeholder='No of Tokens' />
                        </div>
                        <div className='my-4'>
                        <div className='d-flex justify-content-between '>

                            <div className='w-50'>
                                <span className='span-bold'>Total Tokens</span><br />
                                <span>{userConnected == true ? readBalanceOf : '-'}</span>

                            </div>
                            <div className='w-50'>
                                <span className='span-bold'>You Deposit Token</span><br />
                                <span>{token}</span>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between my-3'>
                            <div className='w-50'>
                                <span className='span-bold'>Minimum Deposit Token</span><br />
                                <span>20</span>
                            </div>
                            <div className='w-50'>
                                <span className='span-bold'>Token Deposit Fee</span><br />
                                <span>3 %</span>

                            </div>

                        </div>
                        </div>
                        <div className='text-center d-flex'>
                            <button type='submit'   className='btn btn-primary w-100 mx-2' disabled={DepositBtnDisable} >Submit</button>
                            {DepositHash ? <button className='btn btn-success w-100 mx-2' onClick={viewTx}>View Transaction</button>:''}                           
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}
