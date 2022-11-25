import React from 'react'
import Transaction from '../Transactions/Transaction'
import WidhdrawToken from './WidhdrawToken'

export default function Section2() {
    return (
        <>
            <div title='Section two' className='row d-flex flex-wrap justify-content-between w-100 dashboard-body section1-body pt-3' >

                <div className='  col-md-6 col-sm-12 gap-2 my-1' >
                  <WidhdrawToken />
                </div>
                <div className=' col-md-6 col-sm-12 gap-2  my-1'>
                  <Transaction />
                </div>
            </div>
        </>
    )
}
