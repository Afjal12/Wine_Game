import React, { useContext } from 'react'
import { useEffect } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import { Web3WalletContext } from '../../Context/UseContext';
import { ContractFunctionsContext } from '../Utils/ContractFunctions';

export default function YourTransaction() {
    const columns = [
        {
            name: 'Address',
            selector: row => row.user.slice(0, 10) + '...',
            sortable: true,
        },
        {
            name: 'Bet Tokens',
            selector: row => row.BetTokens.toString(),
            sortable: true,
        },
        {
            name: 'Benefits',
            selector: row => row.TimesBenefit.toString(),
            sortable: true,
        },
        {
            name: 'Date',
            selector: row => {
                let dt = new Date(row.BetTime.toString() * 1000).toDateString();
                return dt
            },
            sortable: true,
        },
        {
            name: 'Head or Tail',
            selector: row => row._HeadOrTail,
            sortable: true,
        },
        {
            name: 'Result',
            selector: (row) => {
                if (row._HeadOrTail == 'Head' && row.result == true || row._HeadOrTail == 'Tail' && row.result == false) {
                    return 'Head'
                }
                else if (row._HeadOrTail == 'Tail' && row.result == true || row._HeadOrTail == 'Head' && row.result == false) {
                    return 'Tail'
                }

            },
            sortable: true,
        }

    ];

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

    const {
        readBalanceOf,
        transactionList,
    } = useContext(ContractFunctionsContext)
    const {
        accountAddress
    } = useContext(Web3WalletContext);

    let transaction = [...transactionList].reverse()
    console.log(transaction);
    let filter = transaction.filter((e) => {
        return e.user.toString().toLowerCase() === accountAddress.toLowerCase()
    })

    useEffect(() => {
        let c = Math.round(100)
        console.log(c);
        let check = Math.floor(Math.random() * 100)
        console.log(check);
    }, [])

    return (
        <>
            <div className="pagetitle  text-light" style={{ background: '#072333', color: 'rgba(255, 255, 255, 0.781)' }}>
                <div className=' mx-5 py-5 '>
                    <h1 style={{ color: 'rgba(255, 255, 255, 0.781)' }}>Your Transactions</h1>
                </div>
            </div>
            <div className='container'>

                <DataTable
                    columns={columns}
                    data={filter}
                    subHeader
                    subHeaderAlign='center'
                    fixedHeader
                    fixedHeaderScrollHeight='25rem'
                    subHeaderComponent={<h1 className='text-primary '>Your Transactions</h1>}
                    theme='solarized'
                    pagination
                    highlightOnHover
                />
            </div>
        </>
    )
}
