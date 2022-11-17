import React from 'react'
import Transaction from '../Transactions/Transaction'
import WidhdrawToken from './WidhdrawToken'

export default function Section2() {
    return (
        <>
            <div title='Section two' className='row d-flex flex-wrap justify-content-between w-100 dashboard-body section1-body pt-3' >

                <p className='  col-md-6 col-sm-12 gap-2 ' >
                  <WidhdrawToken />
                </p>
                <p className=' col-md-6 col-sm-12 gap-2  '>
                  <Transaction />
                </p>
            </div>
        </>
    )
}
