import React, { useContext } from 'react'
import DataTable, { createTheme } from 'react-data-table-component';
import { ContractFunctionsContext } from '../Utils/ContractFunctions';




export default function TableTransaction() {
    const columns = [
        {
            name: 'Address',
            selector: row => row.user
        },
        {
            name: 'Bet Tokens',
            selector: row => row.BetTokens.toString()
        },
        {
            name: 'Benefits',
            selector: row => row.TimesBenefit.toString()
        },
        {
            name: 'Date',
            selector: row =>{  
              let dt = new Date(row.BetTime.toString() *1000).toDateString();
             return dt
            }
        },

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

    let filterBenefitTransactions = transactionList.filter((e) => {
        return e.TimesBenefit.toString() >= 2
    })
    // console.log(filterBenefitTransactions);


    return (
        <>
            <DataTable
                columns={columns}
                data={filterBenefitTransactions.reverse()}
                subHeader
                subHeaderAlign='center'
                fixedHeader
                fixedHeaderScrollHeight='25rem'
                subHeaderComponent={<h1 className='text-primary '>Users Wons List</h1>}
                theme='solarized'
                pagination
                highlightOnHover
            />
        </>
    )
}
