import React from 'react'

const PlayerChoices = props => {
  return (
    <form onSubmit={props.onSubmitHandler}>
      <label htmlFor="leftChoice">Left: </label>
      <input
        id='leftChoice' 
        type='string'
        name='leftChoice'
        value={props.leftChoice}
        onChange={props.onChangeHandler}
      />
      <label htmlFor="rightChoice">Right: </label>
      <input
        id='rightChoice' 
        type='string'
        name='rightChoice'
        value={props.rightChoice}
        onChange={props.onChangeHandler}
      />
      <button id='determineWinner'> Determine Winner </button>
    </form>
  )
}


export default PlayerChoices
