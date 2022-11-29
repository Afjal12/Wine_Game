import React from 'react'
import { RevolvingDot } from 'react-loader-spinner'

export default function TableLoader() {
    
    return (
        <>
        <div className='my-auto '>

            <RevolvingDot
                height="500"
                width="500"
                radius="40"
                color="#fefefe"
                secondaryColor=''
                ariaLabel="revolving-dot-loading"
                // radius="5"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
        </>
    )
}
