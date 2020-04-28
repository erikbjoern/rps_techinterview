import React from 'react'

const PlayerChoices = props => {
  return (
    <form onSubmit={props.onSubmitHandler}>
      <input
        id='leftChoice' 
        type='number'
        name='leftChoice'
        value={props.leftChoice}
        onChange={props.onChangeHandler}
      />
      <input
        id='rightChoice' 
        type='number'
        name='rightChoice'
        value={props.rightChoice}
        onChange={props.onChangeHandler}
      />
      <button id='determineWinner'></button>
    </form>
  )
}


export default PlayerChoices
