import React from 'react'
import DataTable, { createTheme } from 'react-data-table-component';

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
  const columns = [
    {
        name: 'Account Address',
        selector: row => row.address,
    },
    {
        name: 'Network',
        selector: row => row.network
    },
    {
        name: 'Token',
        selector: row => row.token,
    },
];

const data = [
    {
        id: 1,
        address: '0xb9B2c57e5428e31FFa21B302aEd689f4CA2447fE',
        network: 'Mumbai',
        token: '19838',
    },
    {
        id: 2,
        address: '0x1616d6D21859949b3d12C93DA6996b04c28dAF90',
        network: 'Goerli',
        token: '132235',
    },
]

  return (
   <>
   <div className='col-md-6 token-border' >

   <DataTable subHeader subHeaderAlign='center' subHeaderComponent={<h2 className='text-primary'>Users Recent Transactions</h2>} columns={columns} data={data} theme='solarized'/>
   </div>
  
   </>
  )
}
