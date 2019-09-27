import React from 'react'

const Square = (props) => {

    return (
        // click function til hver firkant, så der kommer et x eller o
        <button className="square" onClick={() => props.onClick('X')}>
            {props.value}
        </button>
    )
}

export default Square;
