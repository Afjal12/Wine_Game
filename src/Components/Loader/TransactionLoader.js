import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'
import './TransactionLoader.css'

export default function TransacactionLoader() {
    return (
        <>
        <div className='loader-main d-flex w-100 h-100 back-blur'>

            <div className='mx-auto  my-auto '>
                <p className='text-center text-white '>YOUR TRANSACTION IS BEING PROCESSED PLEASE WAIT!</p>
                <div className='d-flex mx-auto loader' >

                    <ThreeCircles
                        height="100%"
                        width="100%"
                        color="#ffffff"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="three-circles-rotating"
                        outerCircleColor=""
                        innerCircleColor=""
                        middleCircleColor=""
                    />
                </div>
            </div>
        </div>
        </>
    )
}
