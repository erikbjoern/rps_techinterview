import React, { Component } from 'react'
import PlayerChoices from './components/PlayerChoices'
import DisplayWinner from './components/DisplayWinner'
import { determineWinner } from './helpers/determineWinnerHelper'

class App extends Component {
  state = {
    leftChoice: "",
    rightChoice: "",
    winner: ""
  }

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value })

  onSubmitHandler = e => {
    e.preventDefault()
    const winner = determineWinner(this.state.leftChoice, this.state.rightChoice)
    this.setState({ winner: winner })
  }


    render() {
        return (
            <div>
                <PlayerChoices
                  leftChoice={this.state.leftChoice}
                  rightChoice={this.state.rightChoice}
                  onChangeHandler={this.onChangeHandler}
                  onSubmitHandler={this.onSubmitHandler}
                />
                <DisplayWinner
                  winner={this.state.winner}
                  debugger
                />
            </div>
        )
    }
}

export default App