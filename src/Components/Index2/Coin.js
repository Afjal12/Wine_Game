import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import './Coin.css'
import front from '../../Assets/head.jpg'
import back from '../../Assets/back.jpg'

export default function Coin() {

    let heads = 0;
    let tails = 0;



    const [coin, setCoin] = useState('');

    const flipButton = () => {

        let i = Math.floor(Math.random() * 2);
        coin.style.animation = "none";
        if (i) {
            setTimeout(() => {
                coin.style.animation = "spin-heads 3s forwards";
            }, 100);
            heads++;
        }
        else {
            setTimeout(() => {
                coin.style.animation = "spin-tails 3s forwards";
            }, 100);
            tails++;
        }
        setTimeout(updateStats, 3000);
        // disableButton();

    }

    const resetButton = () => {

        coin.style.animation = "none";
        heads = 0;
        tails = 0;
        updateStats();

    }
    useEffect(() => {
        let coin = document.querySelector(".coin-main");
        setCoin(coin)

    }, [])
    function updateStats() {
        document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
        document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
    }
    // function disableButton(){
    //     flipBtn.disabled = true;
    //     setTimeout(function(){
    //         flipBtn.disabled = false;
    //     },3000);
    // }

    const [token, setToken] = useState('')
    const handleChange = (e) => {
        setToken(e.target.value)
    }

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
                <h1></h1>
                <div className="coin-main" id="coin">
                    <div className="heads-img">
                        {/* <img src="https://jkscoinworld.com/wp-content/uploads/2018/05/2013-a-1.jpg" /> */}
                        <img src={front} />
                    </div>
                    <div className="tails-img">
                        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPXdeMWZbX3Vk9Qc3tgGtERTCZNe5z1OyzXN8ZejoIrXgA95Wi4mfTV3BgGr0lGHO5I4&usqp=CAU" /> */}
                        <img src={back} />
                    </div>
                </div>
                <div className=''>

                    <p className='m-0'>Amount</p>
                    <p>
                        <input type="text" className='form-control ' onChange={handleChange} placeholder='Enter Amount in Token' />
                    </p>
                </div>

                <div className="stats">
                    <p id="heads-count" >Heads: 0</p>
                    <p id="tails-count">Tails: 0</p>
                </div>

                <div className="buttons-main">
                    <button className='button-btn' id="flip-button" onClick={flipButton}>
                        Flip Coin
                    </button>
                    <button className='button-btn' id="reset-button" onClick={resetButton}>
                        Reset
                    </button>
                </div>
            </div>
        </>
    )
}
