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

  componentDidMount(){
    document.addEventListener('keydown', this.onKeyDownHandler)
  }

  onKeyDownHandler = e => {
    switch (e.keyCode) {
      case 49:
        this.setState({ leftChoice: "rock" })
        break
      case 50:
        this.setState({ leftChoice: "paper" })
        break
      case 51:
        this.setState({ leftChoice: "scissors" })
        break
      case 37:
        this.setState({ rightChoice: "rock" })
        break
      case 38:
        this.setState({ rightChoice: "paper" })
        break
      case 39:
        this.setState({ rightChoice: "scissors" })
        break
    }
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
        />
      </div>
    )
  }
}

export default App