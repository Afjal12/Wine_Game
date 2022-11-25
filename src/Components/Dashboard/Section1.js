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

            <div title='User Detail' className='row d-flex flex-wrap justify-content-between w-100 dashboard-body section1-body pt-3' >

                <div className='  col-md-6 col-sm-12 gap-2 my-1' >
                    <UserDetail />
                </div>
                <div className=' col-md-6 col-sm-12 gap-2  my-1'>
                    <Dummy />
                </div>
            </div>
        </>

    )
}
