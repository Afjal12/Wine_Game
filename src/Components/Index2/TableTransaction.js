import React from 'react'
import DataTable, { createTheme } from 'react-data-table-component';




export default function TableTransaction() {
    
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


    const columns = [
        {
            name: 'Address',
            selector: row => row.address
        },
        {
            name: 'Tokens',
            selector: row => row.token
        },
        {
            name: 'Amount',
            selector: row => row.amount
        },
        {
            name: 'Bet',
            selector: row => row.bet
        },
        {
            name : 'Status',
            selector: row => row.status
        },

    ];

    const data = [
        {
            address: '3491409137598109257091235098',
            token: '23173578',
            amount: '22 Matic',
            bet : 'Head',
            status: 'won'
        },
        {
            address: '3491409137598109257091235098',
            token: '23173578',
            amount: '13 Matic',
            bet : 'Tail',
            status: 'Loss'
        },
        {
            address: '3491409137598109257091235098',
            token: '23173578',
            amount: '343 Matic',
            bet : 'Head',
            status: 'won'
        }
    ]

    return (
        <div className='col-md-10 d-flex mx-auto my-5' style={{
            borderRadius: '20px'            
        }}>
            <div className='w-100'>
                <DataTable columns={columns} data={data}
                   title='Transactions'
                    theme='solarized'
                    pagination
                    highlightOnHover
                    
                />
            </div>
        </div>
    )
}
