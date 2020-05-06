import React, { Component } from 'react'
import Countdown from './components/Countdown'
import { determineWinner } from './helpers/determineWinnerHelper'

class App extends Component {
  state = {
    leftChoice: "",
    rightChoice: "",
    weHaveAWinner: false,
    winner: "",
    countdown: 4
  }

  componentDidMount(){
    document.addEventListener('keydown', this.onKeyDownHandler)
  }

  startGame = () => {
    setInterval(() => {
      const winner = determineWinner(this.state.leftChoice, this.state.rightChoice)
      const countdown = this.state.countdown

      if (countdown > 1) {
        this.setState(({countdown}) => ({
          countdown: countdown - 1
        }))
      } else if (countdown === 1) {
        this.setState(({countdown}) => ({ 
          weHaveAWinner: true,
          winner: winner,
          leftChoice: "",
          rightChoice: "",
          countdown: countdown - 1
         }))
      } else {
        this.setState({ 
          countdown: 3,
          weHaveAWinner: false
        })
      }
    }, 1000)
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
    let renderWinner
    let startButton

    if (this.state.weHaveAWinner === true) {
      renderWinner = <p id="winner">{this.state.winner}</p>
    }
    if (this.state.countdown === 4) {
      startButton = <button id="start-game" onClick={this.startGame}>Start!</button>
    }

    return (
      <div>
        {startButton}
        <Countdown countdown={this.state.countdown}/>
        {renderWinner}
      </div>
    )
  }
}

export default App