import './Game.css';
import handle from '../../Assets/handle.webp'

import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Header, { useWeb3Wallet } from '../../Common/Header';
import { useContext } from 'react';
import { Web3WalletContext } from '../../Context/UseContext';
import BuyToken from '../BuyToken/BuyToken';
import { ContractFunctionsContext } from '../Utils/ContractFunctions';
import Transaction from '../Transactions/Transaction';



const Game = ({ id, owned, close, expires }) => {

    const [spin, setSpin] = useState(false)
    const [ring1, setRing1] = useState()
    const [ring2, setRing2] = useState()
    const [ring3, setRing3] = useState()
    const [price, setPrice] = useState()
    const [input, setInput] = useState()
    const [realBet, setRealBet] = useState()
    const [jackpot, setJackpot] = useState(0)
    const [balance, setBalance] = useState(100000)


    useEffect(() => {
        win()
    }, [ring3])


    function row1() {

        if (!spin) {
            return (
                <>
                    <div className="ringEnd">🍓</div>
                    <div className="ringEnd">🍇</div>
                    <div className="ringEnd">🍊</div>
                    <div className="ringEnd">🥭</div>
                </>
            )
        } else if (spin && ring1 == undefined) {
            return (
                <>
                    <div className="ringMoving">🍓</div>
                    <div className="ringMoving">🍇</div>
                    <div className="ringMoving">🍊</div>
                    <div className="ringMoving">🥭</div>
                </>
            )
        } else if (ring1 >= 1 && ring1 <= 50) {
            return (
                <>
                    <div className="ringEnd">🍓</div>
                    <div className="ringEnd">🍇</div>
                    <div className="ringEnd">🍊</div>
                    <div className="ringEnd">🥭</div>
                </>
            )
        } else if (ring1 > 50 && ring1 <= 75) {
            return (
                <>
                    <div className="ringEnd">🍇</div>
                    <div className="ringEnd">🍊</div>
                    <div className="ringEnd">🥭</div>
                    <div className="ringEnd">🍓</div>
                </>
            )
        } else if (ring1 > 75 && ring1 <= 95) {
            return (
                <>
                    <div className="ringEnd">🍊</div>
                    <div className="ringEnd">🥭</div>
                    <div className="ringEnd">🍓</div>
                    <div className="ringEnd">🍇</div>
                </>
            )
        } else if (ring1 > 95 && ring1 <= 100) {
            return (
                <>
                    <div className="ringEnd">🥭</div>
                    <div className="ringEnd">🍓</div>
                    <div className="ringEnd">🍇</div>
                    <div className="ringEnd">🍊</div>
                </>
            )
        }
    }

    function row2() {

        if (!spin) {
            return (
                <>
                    <div className="ringEnd">🥭</div>
                    <div className="ringEnd">🍓</div>
                    <div className="ringEnd">🍇</div>
                    <div className="ringEnd">🍊</div>
                </>
            )
        } else if (spin && ring2 == undefined) {
            return (
                <>
                    <div className="ringMoving">🍓</div>
                    <div className="ringMoving">🍇</div>
                    <div className="ringMoving">🍊</div>
                    <div className="ringMoving">🥭</div>
                </>
            )
        } else if (ring2 >= 1 && ring2 <= 50) {
            return (
                <>
                    <div className="ringEnd">🍓</div>
                    <div className="ringEnd">🍇</div>
                    <div className="ringEnd">🍊</div>
                    <div className="ringEnd">🥭</div>
                </>
            )
        } else if (ring2 > 50 && ring2 <= 75) {
            return (
                <>
                    <div className="ringEnd">🍇</div>
                    <div className="ringEnd">🍊</div>
                    <div className="ringEnd">🥭</div>
                    <div className="ringEnd">🍓</div>
                </>
            )
        } else if (ring2 > 75 && ring2 <= 95) {
            return (
                <>
                    <div className="ringEnd">🍊</div>
                    <div className="ringEnd">🥭</div>
                    <div className="ringEnd">🍓</div>
                    <div className="ringEnd">🍇</div>
                </>
            )
        } else if (ring2 > 95 && ring2 <= 100) {
            return (
                <>
                    <div className="ringEnd">🥭</div>
                    <div className="ringEnd">🍓</div>
                    <div className="ringEnd">🍇</div>
                    <div className="ringEnd">🍊</div>
                </>
            )
        }

    }

    function row3() {

        if (!spin) {
            return (
                <>
                    <div className="ringEnd">🥭</div>
                    <div className="ringEnd">🍓</div>
                    <div className="ringEnd">🍇</div>
                    <div className="ringEnd">🍊</div>
                </>
            )
        } else if (spin && ring3 == undefined) {
            return (
                <>
                    <div className="ringMoving">🍓</div>
                    <div className="ringMoving">🍇</div>
                    <div className="ringMoving">🍊</div>
                    <div className="ringMoving">🍋</div>
                    <div className="ringMoving">🍍</div>
                    <div className="ringMoving">🥭</div>
                </>
            )
        } else if (ring3 >= 1 && ring3 <= 50) {
            return (
                <>
                    <div className="ringEnd">🍓</div>
                    <div className="ringEnd">🍇</div>
                    <div className="ringEnd">🍊</div>
                    <div className="ringEnd">🥭</div>
                </>
            )
        } else if (ring3 > 50 && ring3 <= 75) {
            return (
                <>
                    <div className="ringEnd">🍇</div>
                    <div className="ringEnd">🍊</div>
                    <div className="ringEnd">🥭</div>
                    <div className="ringEnd">🍓</div>
                </>
            )
        } else if (ring3 > 75 && ring3 <= 95) {
            return (
                <>
                    <div className="ringEnd">🍊</div>
                    <div className="ringEnd">🥭</div>
                    <div className="ringEnd">🍓</div>
                    <div className="ringEnd">🍇</div>
                </>
            )
        } else if (ring3 > 95 && ring3 <= 100) {
            return (
                <>
                    <div className="ringEnd">🥭</div>
                    <div className="ringEnd">🍓</div>
                    <div className="ringEnd">🍇</div>
                    <div className="ringEnd">🍊</div>
                </>
            )
        }
    }

    function win() {
        if (ring1 <= 50 && ring2 <= 50 && ring3 <= 50 && ring1 != undefined) {
            setPrice(1)
        } else if (ring1 > 50 && ring1 <= 75 && ring2 > 50 && ring2 <= 75 && ring3 > 50 && ring3 <= 75 && ring1 != undefined) {
            setPrice(2)
        } else if (ring1 > 75 && ring1 <= 95 && ring2 > 75 && ring2 <= 95 && ring3 > 75 && ring3 <= 95 && ring1 != undefined) {
            setPrice(3)
        } else if (ring1 > 95 && ring1 <= 100 && ring2 > 95 && ring2 <= 100 && ring3 > 95 && ring3 <= 100 && ring1 != undefined) {
            setPrice(4)
        } else {
            setPrice(0)
        }
    }

    function rand() {
        setRing1(Math.floor(Math.random() * (100 - 1) + 1))
        setTimeout(function () { setRing2(Math.floor(Math.random() * (100 - 1) + 1)) }, 1000)
        setTimeout(function () { setRing3(Math.floor(Math.random() * (100 - 1) + 1)) }, 2000)
    }

    function play() {
        if (ring3 > 1 || !spin) {
            if (input <= balance && input >= 1) {
                setRealBet(input)
                setSpin(true)
                setRing1()
                setRing2()
                setRing3()
                setBalance(balance - input)
                setJackpot(jackpot + (input / 2))
                setTimeout(function () {
                    rand()
                }, 2000)
            } else {
                setPrice(10)
            }

        }

        document.getElementById('handle-btn').style.cssText = "transform : rotate(-20deg) ;background: transparent;border: unset ; transition : all 0.3s ";
        function changeHandle() {
            document.getElementById('handle-btn').style.cssText = "transform : rotate(0deg) ;background: transparent;border: unset ;transition : all 0.3s ";
        }
        setTimeout(changeHandle, 300)

    }


    function win() {
        if (ring1 <= 50 && ring2 <= 50 && ring3 <= 50 && ring1 != undefined) {
            setPrice(1)
            setBalance(balance + (balance * 15))
        } else if (ring1 > 50 && ring1 <= 75 && ring2 > 50 && ring2 <= 75 && ring3 > 50 && ring3 <= 75 && ring1 != undefined) {
            setPrice(2)
            setBalance(balance + (balance * 20))
        } else if (ring1 > 75 && ring1 <= 95 && ring2 > 75 && ring2 <= 95 && ring3 > 75 && ring3 <= 95 && ring1 != undefined) {
            setPrice(3)
            setBalance(balance + (balance * 25))
        } else if (ring1 > 95 && ring1 <= 100 && ring2 > 95 && ring2 <= 100 && ring3 > 95 && ring3 <= 100 && ring1 != undefined) {
            setPrice(4)
            setBalance(balance + jackpot)
            setJackpot(0)
        } else {
            setPrice(0)
        }
    }

    function premio() {
        if (price === 1 && ring3 > 1) {
            return (
                <p className="priceInd">{"🍇 X15 You've won " + (realBet * 15) + "$!"}</p>
            )
        } else if (price === 2 && ring3 > 1) {
            return (
                <p className="priceInd">{"🍊 X20 You've won " + (realBet * 20) + "$!"}</p>
            )
        } else if (price === 3 && ring3 > 1) {
            return (
                <p className="priceInd">{"🥭 X25 You've won " + (realBet * 25) + "$!"}</p>
            )
        } else if (price === 4 && ring3 > 1) {
            return (
                <p className="priceInd">{"🍓 Jackpot! You've won: " + (jackpot) + "$!"}</p>
            )
        } else if (price === 0 && ring3 > 1) {
            return (
                <p className="priceInd">😧 ¡So close! But no luck...</p>
            )
        } else if (price === 10) {
            return (
                <p className="priceInd">🥶 <span style={{ color: `red` }}>Not enough funds</span> </p>
            )
        }
    }

    function numChecker(e) {
        const value = e.target.value;
        const regex = /^[0-9]+$/;
        if (value.match(regex) && parseInt(value) >= 0 || value === "") {
            setInput(value);
        }
    }





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

    // console.log('UserConnected', userConnected);
    // console.log('AccountAddress', accountAddress);
    // console.log('WalletConnected', walletConnected);
    // console.log('Wallet Balance' , WalletBalance);




    return (
        <>
            <section title='game-body' className='game-body'>

                <div className="pagetitle text-light">
                    <div className='w-25 mx-5 py-5 '>

                        <h1 style={{ color: 'rgba(255, 255, 255, 0.781)' }}>Bet Game</h1>
                        <nav>
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item active">
                                    <Link to="/dashboard" style={{ textDecoration: 'none' }}>Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item ">Bet</li>
                                {/* <li className="breadcrumb-item active">Profile</li> */}
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className='pt-5 row w-100' style={{
                    border: 'unset',
                    background: 'unset',
                    height: '100vh'

                }}>
                    <div className='col-md-2 text-white'>

                    </div>
                    <div className='col-md-2  my-auto ' >
                        {
                            userConnected === true ?

                                <button id='handle-btn' onClick={() => play()} style={{
                                    background: 'transparent',
                                    border: 'unset'
                                }}>
                                    {

                                        <img src={handle} alt="image" width='100%' />

                                    }
                                </button> : <button className='btn btn-primary' onClick={ProvidermetamaskLogin} >Do you want to connect Plz Click Me</button>
                        }
                    </div>

                    <div className="fullSlot col-md-10 p-2 game-css">

                        <h1 className="casinoName">casino montecarlo</h1>
                        {/* <h1 className="casinoName">Jue ka Adda</h1> */}
                        <h1 className="price">{"Jackpot: " + jackpot + "$"}</h1>

                        <div className="slot  justify-content-between">
                            <div className="col-md-3  bg-light">
                                {row1()}
                            </div>
                            <div className="col-md-3  bg-light">
                                {row2()}
                            </div>
                            <div className="col-md-3  bg-light">
                                {row3()}
                            </div>
                        </div>

                        <h1 className="price">
                            {premio()}
                        </h1>
                        <div className="slotFoot">
                            <input value={input} type="number" onChange={(e) => numChecker(e)} className="betInput" placeholder="0$"></input>

                        </div>
                        <h1 className="price">{"Available cash: " + Math.round((balance * 100)) / 100 + "$"}</h1>
                        {/* <h1 className="price">{"Available cash: " + readBalanceOf+ "$"}</h1> */}
                        <button onClick={() => setBalance(balance + 1000)} className="buyMoreButton">Add 1000 $</button>
                    </div>

                </div>
              
            </section>



        </>
    )
}

export default Game;
