import React from 'react'
import './index.scss'

const Colors = ( {data} ) => {

    return (
        <div className='containerColors'>
            {data.colors.map((color) => (
                <div className={`colors colors__${color}`}>
                </div>
            ))}
        </div>
        
    )
}

export default Colors