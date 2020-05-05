import React from 'react'

const PlayerPlaceholders = props => {
  return (
    <form onSubmit={props.onSubmitHandler}>
      <label htmlFor="leftPlayer">Left: </label>
      <input
        id='leftPlayer' 
        type='string'
        name='leftPlayer'
      />
      <label htmlFor="rightPlayer">Right: </label>
      <input
        id='rightPlayer' 
        type='string'
        name='rightPlayer'
      />
      <button id='determineWinner'> Determine Winner </button>
    </form>
  )
}


export default PlayerPlaceholders
