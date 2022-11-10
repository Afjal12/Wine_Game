import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Web3WalletContext } from '../../Context/UseContext';
import { ContractFunctionsContext } from '../Utils/ContractFunctions';
import "./Dashboard.css";

export default function Section1() {
    const {
        userConnected,
        accountAddress,
        walletConnected,
        ProvidermetamaskLogin,
        disconnectUser,
        getMetamaskAccount,
        WalletBalance,
        networkName
    } = useContext(Web3WalletContext);
    const {
        readBalanceOf,
        readDepositedTokens
    } = useContext(ContractFunctionsContext)

    return (
        <>

            <div className='d-flex justify-content-between w-100 dashboard-body section1-body pt-3' >

                
                <p className='col-md-5 token-border ' >
                    <h2 className='text-center text-primary'>User Detail</h2>
                    {userConnected == true ? '' : <p className='text-center text-danger'>Please connect your wallet First</p>}
                    <p > WalletAddress : {accountAddress ? accountAddress : '-'}</p>
                    <p > Balance : {WalletBalance ? WalletBalance : '-'}</p>
                    <p>Network Name : {networkName ? networkName : '-'}</p>
                    <p>Token Balance : {userConnected == true ? readBalanceOf : '-'} </p>
                    <p>Deposited Tokens: {userConnected == true ? readDepositedTokens : '-'}</p>
                </p>
                <p className='col-md-6   token-border'>
                    <h2 className='text-center text-primary'>Dummy Data</h2>
                    <p>No of buy token : 34872</p>
                    <p>Withdrawel amount : 32489230430 Token</p>
                    <p>Wins : 23456789</p>
                    <p>Lose : 234567</p>

                </p>

            </div>
        </>

    )
}
