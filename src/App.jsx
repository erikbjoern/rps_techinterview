import React, { Component } from 'react'
import Countdown from './components/Countdown'
import { determineWinner } from './helpers/determineWinnerHelper'
import rightRock from './images/right-rock.png'
import rightPaper from './images/right-paper.png'
import rightScissors from './images/right-scissors.png'
import leftRock from './images/left-rock.png'
import leftPaper from './images/left-paper.png'
import leftScissors from './images/left-scissors.png'
import { Container, Image } from 'semantic-ui-react'


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
          countdown: countdown - 1
         }))
      } else {
        this.setState({ 
          countdown: 3,
          weHaveAWinner: false,
          leftChoice: "",
          rightChoice: ""
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
    let leftPlayer
    let rightPlayer
    let leftPlayerChoice
    let rightPlayerChoice

    if (this.state.leftChoice === 'rock') {
      leftPlayerChoice = <Image size='tiny' src={leftRock}/>
    } else if (this.state.leftChoice === 'paper') {
      leftPlayerChoice = <Image size='tiny' src={leftPaper}/>
    } else if (this.state.leftChoice === 'scissors') {
      leftPlayerChoice = <Image size='tiny' src={leftScissors}/>
    }
    
    if (this.state.rightChoice === 'rock') {
      rightPlayerChoice = <Image size='tiny' src={rightRock}/>
    } else if (this.state.rightChoice === 'paper') {
      rightPlayerChoice = <Image size='tiny' src={rightPaper}/>
    } else if (this.state.rightChoice === 'scissors') {
      rightPlayerChoice = <Image size='tiny' src={rightScissors}/>
    }

    if (this.state.weHaveAWinner === true) {
      renderWinner = <p id="winner">{this.state.winner}</p>
      leftPlayer   = leftPlayerChoice
      rightPlayer  = rightPlayerChoice
    } else {
      leftPlayer   = <Image size='tiny' src={leftRock}/>
      rightPlayer  = <Image size='tiny' src={rightRock}/>
    }

    if (this.state.countdown === 4) {
      startButton = <button id="start-game" onClick={this.startGame}>Start!</button>
    }

    return (
      <Container>
        {startButton}
        <Countdown countdown={this.state.countdown}/>
        {renderWinner}
        {leftPlayer}
        {rightPlayer}
      </Container>
    )
  }
}

export default App