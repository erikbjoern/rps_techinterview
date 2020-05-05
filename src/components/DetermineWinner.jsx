import React from 'react'

const DetermineWinner = props => {
  return (
    <form onSubmit={props.onSubmitHandler}>
      <button id='determineWinner'> Determine Winner </button>
    </form>
  )
}


export default DetermineWinner
