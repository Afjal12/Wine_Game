import React from 'react'
import { useContext } from 'react';
import { Web3WalletContext } from '../../Context/UseContext';
import { ContractFunctionsContext } from '../Utils/ContractFunctions';

export default function UserDetail() {
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
        <div className='token-border p-3'>

            <h1 className='text-center text-primary'>User Detail</h1>
            {userConnected == true ? '' : <p className='text-center text-danger'>Please connect your wallet First</p>}
            <p > WalletAddress : {accountAddress ? accountAddress : '-'}</p>
            <p > Balance : {WalletBalance ? WalletBalance : '-'}</p>
            <p>Network Name : {networkName ? networkName : '-'}</p>
            <p>Token Balance : {userConnected == true ? readBalanceOf : '-'} </p>
            <p>Deposited Tokens: {userConnected == true ? readDepositedTokens : '-'}</p>
        </div>
        </>
    )
}
