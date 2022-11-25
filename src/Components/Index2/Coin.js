import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import './Coin.css'
import { useContext } from 'react';
import { ContractFunctionsContext } from '../Utils/ContractFunctions';
import { Web3WalletContext } from '../../Context/UseContext';
import { toast } from 'react-toastify';
import TableTransaction from './TableTransaction';
import DataTable, { createTheme } from 'react-data-table-component';
import BuyToken from '../BuyToken/BuyToken';
import DepositEth from '../Dashboard/DepositEth';
import { ThreeCircles } from 'react-loader-spinner';
import TransacactionLoader from '../Loader/TransactionLoader';

export default function Coin() {

    const [head, setHead] = useState(0);
    const [tail, setTail] = useState(0);
    const [coin, setCoin] = useState('');
    const [disable, setDisable] = useState(false);
    const [select, setSelect] = useState('')


    const showError = (e) => {
        e.preventDefault();
        if (userConnected == false) {

            toast.warn('Connect Your Wallet First');
        } else if (+bettoken < 1) {
            toast.info('Amount must be greater than 1')
        }
        else if (+bettoken > +readDepositedTokens) {
            toast.warn('Insufficient Balance')
        }
    }

    const getResult = async () => {

        let filterTransaction = await [...transactionList]
        let R = await filterTransaction.reverse();
        let result = await R[0]?.result
        console.log(result);
        return await result
    }


    const flipButton = async (e) => {
        e.preventDefault();
        
        let batt = await clickHeadOrTail();
        let headOrTail = await getResult();


        if (batt == true) {
            // let i = Math.floor(Math.random() * 10);
            setDisable(true)
            coin.style.animation = "none";
            if (headOrTail == true && select == 'Head' || headOrTail == false && select == 'Tail') {
                setTimeout(() => {
                    coin.style.animation = "spin-heads 3s forwards";
                }, 100);
                setTimeout(() => {
                    setHead(head + 1);
                    setDisable(false)
                    if (headOrTail == true && select == 'Head') {
                        toast.success('🏆 Contgrateulations You Win 2X Token 🏆')
                    } else {
                        toast.info('😮 So Close! But No luck 😮')
                    }
                }, 3000);

            }
            else if (headOrTail == true && select == 'Tail' || headOrTail == false && select == 'Head') {
                setTimeout(() => {
                    coin.style.animation = "spin-tails 3s forwards";
                }, 100);
                setTimeout(() => {
                    setTail(tail + 1);
                    setDisable(false)
                    if (headOrTail == true && select == 'Tail') {
                        toast.success('🏆 Contgrateulations You Win 2X Token 🏆')
                    } else {
                        toast.info('😮 So Close! But No luck 😮')
                    }
                }, 3000);

            }
            setTimeout(3000);
        }
    }

    const resetButton = (e) => {
        e.preventDefault();

        // coin.style.animation = "none";
        setHead(0);
        setTail(0);

    }
    useEffect(() => {
        let coin = document.querySelector(".coin-main");
        setCoin(coin)

    }, [])



    const {
        userConnected,
        loader,
        setLoader,
    } = useContext(Web3WalletContext)

    const {
        handleBetToken,
        setUserSelect,
        clickHeadOrTail,
        bettoken,
        readDepositedTokens,
        symbol,
        transactionList
    } = useContext(ContractFunctionsContext)




return (

        <>
        { loader &&  <TransacactionLoader />}

            <div className='min-vh-100'>
                <div className='d-flex flex-wrap justify-content-between w-100'>
                    <div className="pagetitle  text-light" style={{ background: '#072333', color: 'rgba(255, 255, 255, 0.781)' }}>
                        <div className=' mx-5 py-5 '>

                            <h1 style={{ color: 'rgba(255, 255, 255, 0.781)' }}>Coin Flip</h1>
                            <nav>
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item active">
                                        <Link to="/" style={{ textDecoration: 'none' }}>Dashboard</Link>
                                    </li>
                                    <li className="breadcrumb-item ">Coin-flip</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className="my-auto  py-2">
                        <button type="button" className='btn btn-primary mx-3' data-bs-toggle="modal" data-bs-target="#BuyToken" >
                            Buy Token
                        </button>
                        <button type="button" className='btn btn-success mx-3' data-bs-toggle="modal" data-bs-target="#DepositToken">
                            Deposit Token
                        </button>

                    </div>
                    {/* <!-- Buy Token Modal --> */}
                    <div className="modal fade " id="BuyToken" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog ">
                            <div className="modal-content">
                                <div className="modal-body p-0 ">
                                    <BuyToken />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Deposit  Token Modal --> */}
                    <div className="modal fade " id="DepositToken" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog ">
                            <div className="modal-content">
                                <div className="modal-body p-0 ">
                                    <DepositEth />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div style={{
                    marginBottom : '1rem'
                }}>
                <div className='row justify-content-center w-100 '>
                    <div className="container-coin col-md-5 " style={{
                        // height: '33rem'
                    }}>
                        <form onSubmit={userConnected == true && +bettoken >= 1 && +bettoken < +readDepositedTokens ? flipButton : showError}>
                            <p className='text-center  bet-text m-0'>Balance in Pool : {userConnected == true ? <span className='bet-text'> {readDepositedTokens + ' ' + symbol}</span> : ''} </p>
                            <div className="coin-main" id="coin">

                                <div className="heads-img">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPXdeMWZbX3Vk9Qc3tgGtERTCZNe5z1OyzXN8ZejoIrXgA95Wi4mfTV3BgGr0lGHO5I4&usqp=CAU" />
                                    {/* <img src={front} /> */}
                                </div>
                                <div className="tails-img">
                                    <img src="https://jkscoinworld.com/wp-content/uploads/2018/05/2013-a-1.jpg" />
                                    {/* <img src={back} /> */}
                                </div>
                            </div>
                            <div >


                                <p>
                                    <label htmlFor="token">Amount</label>
                                    <input name='token' required={true} type="number" className='form-control ' onChange={handleBetToken} placeholder='Enter Amount in Token' />
                                </p>
                            </div>

                            <div className="stats d-flex justify-content-between">

                                <div className="form-check">
                                    <input
                                        className="form-check-input "
                                        type="radio"
                                        required={true}
                                        onBlur={() => {
                                            setUserSelect('Head')
                                            setSelect('Head')
                                        }}
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                    />
                                    <label className="form-check-label mx-2" htmlFor="flexRadioDefault1">Heads: {head}</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input "
                                        type="radio"
                                        required={true}
                                        onBlur={() => {
                                            setUserSelect('Tail')
                                            setSelect('Tail')
                                        }}
                                        name="flexRadioDefault"
                                        id="flexRadioDefault2"
                                    />
                                    <label className="form-check-label mx-2" htmlFor="flexRadioDefault2">Tails: {tail}</label>
                                </div>
                            </div>

                            <div className="buttons-main">
                                <button type='submit' className='button-btn' id="flip-button" disabled={disable} >
                                    Flip Coin
                                </button>
                                <button className='button-btn' id="reset-button" onClick={resetButton}>
                                    Reset
                                </button>
                            </div>

                        </form>
                    </div>
                    <div className='col-md-6'>
                        <div>
                            <TableTransaction />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        
   
           
     
    
        </>
    )
}
