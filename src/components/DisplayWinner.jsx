import React from 'react'

const DisplayWinner = props => {
  return (
      <p id='winner'>
          The winner is: {props.winner}
      </p>
    )
  }


export default DisplayWinner
