import React from 'react'
import { useContext } from 'react'
import { Web3WalletContext } from '../../Context/UseContext'
import Transaction from '../Transactions/Transaction'
import { ContractFunctionsContext } from '../Utils/ContractFunctions'
import './Dashboard.css'

export default function WidhdrawToken() {

    const {
        handleWithdraw,
        ClickWithdrawFunction,
        handleTokens,
        readBalanceOf,
        readDepositedTokens
    } = useContext(ContractFunctionsContext);
    const {
        networkName,
        userConnected
    } = useContext(Web3WalletContext)

    return (
        <>

            <div className='d-flex dashboard-body  justify-content-between'>
                <div className='col-md-5  font-token p-4 token-border  '>
                    <h1 className='text-center text-primary'>Withdraw Token</h1>
                    <p>Network : {userConnected == true ? networkName : 'Connect your wallet First'}</p>
                    <span>Address</span><br />
                    <p>

                        <input type="text" className='form-control bg-dark text-white' onChange={handleWithdraw} placeholder='Address' />
                    </p>
                    <span>Tokens</span><br />
                    <p>

                        <input type="number" className='form-control bg-dark text-white' onChange={handleTokens} placeholder='Tokens' />
                    </p>
                    <div className='d-flex justify-content-between'>

                        <p className='w-50'>
                            <span className='span-bold'>Total Tokens</span><br />
                            <span>{userConnected ? readBalanceOf : '-'}</span>

                        </p>
                        <p className='w-50'>
                            <span className='span-bold'>Total Withdrawable token</span><br />
                            <span>{userConnected ? readDepositedTokens : '-'}</span>

                        </p>

                    </div>
                    <div className='d-flex justify-content-between'>

                        <p className='w-50'>
                            <span className='span-bold'>Minimum Withdrable token</span><br />
                            <span>50</span>

                        </p>
                        <p className='w-50'>
                            <span className='span-bold'>Withdraw token fee</span><br />
                            <span>3 %</span>

                        </p>

                    </div>
                    <p className='text-center'>

                        <button className='btn btn-primary w-100' onClick={ClickWithdrawFunction}>Submit</button>
                    </p>

                </div>
                <Transaction />
            </div>
        </>
    )
}
