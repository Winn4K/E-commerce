import React from 'react'
import './index.scss'

const Sizes = ( {data} ) => {
    return (
        <div className='containerSizes'>
            {data.size.map((size) => (
                <div className='sizes'>
                    <p>{size}</p>
                </div>
            ))}
        </div>
    )
}

export default Sizes