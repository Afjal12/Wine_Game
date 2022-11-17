import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import { Web3WalletContext } from '../../Context/UseContext';
import { ContractFunctionsContext } from '../Utils/ContractFunctions';

export default function Transaction() {
  createTheme('solarized', {
    text: {
      primary: '#268bd2',
      secondary: '#2aa198',
    },
    background: {
      default: '#002b36',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  }, 'dark');
  const { transactionList } = useContext(ContractFunctionsContext);
  const {userConnected} = useContext(Web3WalletContext);
  const columns = [
    {
      name: 'Account Address',
      selector: row => row.user,
    },
    {
      name: 'Bet Time',
      selector: row => new Date(+row.BetTime.toString() * 1000).toDateString()
    },
    {
      name: 'Bet Tokens',
      selector: row => row.BetTokens.toString()
    },
    {
      name: 'Won Tokens',
      selector: row => row.WonTokens.toString()
    }
  ];


  return (
    <>
      <div className='card-width token-border '  >

        <DataTable
          subHeader
          subHeaderAlign='center'
          fixedHeader
          fixedHeaderScrollHeight='25rem'
          subHeaderComponent={<h1 className='text-primary '>Users Recent Transactions</h1>}
          columns={columns}
          data={userConnected == true ? transactionList :  ''}
          theme='solarized'
          pagination
          highlightOnHover
          style={{height : '100%'}}
        />

      </div>

    </>
  )
}
