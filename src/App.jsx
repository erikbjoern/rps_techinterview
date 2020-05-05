import React, { Component } from 'react'
import DisplayWinner from './components/DisplayWinner'
import { determineWinner } from './helpers/determineWinnerHelper'

class App extends Component {
  state = {
    leftChoice: "",
    rightChoice: "",
    winner: ""
  }

  componentDidMount(){
    document.addEventListener('keydown', this.onKeyDownHandler)

    setInterval(() => {
      const winner = determineWinner(this.state.leftChoice, this.state.rightChoice)
      this.setState({ winner: winner })
    }, 5000)
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
        <DisplayWinner
          winner={this.state.winner}
        />
      </div>
    )
  }
}

export default App