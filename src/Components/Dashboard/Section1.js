import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Web3WalletContext } from '../../Context/UseContext';
import { ContractFunctionsContext } from '../Utils/ContractFunctions';
import "./Dashboard.css";
import Dummy from './Dummy';
import UserDetail from './UserDetail';

export default function Section1() {


    return (
        <>

            <div title='User Detail' className='d-flex  justify-content-between w-100 dashboard-body section1-body pt-3' >

                <p className=' token-border card-width px-4' >
                    <UserDetail />
                </p>
                <Dummy />

            </div>
        </>

    )
}
