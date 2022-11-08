import React from 'react'
import './BuyToken.css'

export default function BuyToken() {
    return (
        <section title='Buy Token' className='m-0 p-0 text-white min-vh-100 d-flex' >

            <>
                <div className='col-md-6 mx-auto my-auto p-3' style={{
                    border: '2px solid #454cff',
                    borderRadius: '20px',
                }}>
                    <h1 className='token-border text-center mt-5'>Buy Token Form</h1>
                    <div  className='mt-5'>
                        <p className='m-0' >How much you want to Convert</p>
                        <input type="text" className='token-border form-control bg-dark text-white' placeholder='Enter Amount' />
                    </div>

                    <div className='mt-5'>
                        <p className='m-0'>You will get token</p>

                        <input type="text" className='token-border form-control bg-dark text-white' placeholder='Token' />
                    </div>
                    <p className='text-center mt-5'>

                    <button className='btn btn-warning  '>Buy Token</button>
                    </p>
                </div>
            </>

        </section>
    )
}
