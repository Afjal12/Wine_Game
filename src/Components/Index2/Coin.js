import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import './Coin.css'
import front from '../../Assets/head.jpg'
import back from '../../Assets/back.jpg'
import { useContext } from 'react';
import { ContractFunctionsContext } from '../Utils/ContractFunctions';
import { Web3WalletContext } from '../../Context/UseContext';
import { toast } from 'react-toastify';

export default function Coin() {

    const [head, setHead] = useState(0);
    const [tail, setTail] = useState(0);
    const [coin, setCoin] = useState('');
    const [disable, setDisable] = useState(false);



    const showError = (e) => {
        e.preventDefault();
        if (userConnected == false) {

            toast.warn('Connect Your Wallet First');
        } else if (bettoken < 1) {
            toast.info('Amount must be greater than 1')
        }
    }

    const flipButton = async (e) => {
        e.preventDefault();

        let batt = await clickHeadOrTail();

        if (batt == true) {
            let i = Math.floor(Math.random() * 10);
            setDisable(true)
            coin.style.animation = "none";
            if (i%2 == 0) {
                setTimeout(() => {
                    coin.style.animation = "spin-heads 3s forwards";
                }, 100);
                setTimeout(() => {
                    setHead(head + 1);
                    setDisable(false)
                }, 3000);
                setIsHead(true)
            }
            else {
                setTimeout(() => {
                    coin.style.animation = "spin-tails 3s forwards";
                }, 100);
                setTimeout(() => {
                    setTail(tail + 1);
                    setDisable(false)
                }, 3000);
                setIsHead(false)
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
        userConnected
    } = useContext(Web3WalletContext)

    const {
        handleBetToken,
        setIsHead,
        clickHeadOrTail,
        bettoken
    } = useContext(ContractFunctionsContext)

    return (

        <>
            <div className="pagetitle text-light" style={{ background: '#072333', color: 'rgba(255, 255, 255, 0.781)' }}>
                <div className='w-25 mx-5 py-5 '>

                    <h1 style={{ color: 'rgba(255, 255, 255, 0.781)' }}>Coin Game</h1>
                    <nav>
                        <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item active">
                                <Link to="/" style={{ textDecoration: 'none' }}>Dashboard</Link>
                            </li>
                            <li className="breadcrumb-item ">Coin</li>
                            {/* <li className="breadcrumb-item active">Profile</li> */}
                        </ol>
                    </nav>
                </div>
                {/* <div>
                    <p>Wallet Address : 0xe0517dae147514e90ccfeed48e053a4a186a9348</p>
                    <p>Token Balance : 214831438</p>
                </div> */}
            </div>
            <div className="container-coin">

                <form >
                    <h1></h1>
                    <div className="coin-main" id="coin">
                        <div className="heads-img">
                            <img src="https://jkscoinworld.com/wp-content/uploads/2018/05/2013-a-1.jpg" />
                            {/* <img src={front} /> */}
                        </div>
                        <div className="tails-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPXdeMWZbX3Vk9Qc3tgGtERTCZNe5z1OyzXN8ZejoIrXgA95Wi4mfTV3BgGr0lGHO5I4&usqp=CAU" />
                            {/* <img src={back} /> */}
                        </div>
                    </div>
                    <div className=''>


                        <p>
                            <label htmlFor="token">Amount</label>
                            <input name='token' required={true} type="number" className='form-control ' onChange={handleBetToken} placeholder='Enter Amount in Token' />
                        </p>
                    </div>

                    <div className="stats">
                        <p id="heads-count" >Heads: {head}</p>
                        <p id="tails-count">Tails: {tail}</p>
                    </div>

                    <div className="buttons-main">
                        <button className='button-btn' id="flip-button" disabled={disable} onClick={

                            userConnected == true && bettoken >= 1 ? flipButton : showError
                        }>
                            Flip Coin
                        </button>
                        <button className='button-btn' id="reset-button" onClick={resetButton}>
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
