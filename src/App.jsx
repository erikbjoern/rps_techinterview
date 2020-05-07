import React, { Component } from 'react'
import { Container, Image, Header, Button } from 'semantic-ui-react'

import Countdown from './components/Countdown'
import { determineWinner } from './helpers/determineWinnerHelper'
import rightRock from './images/right-rock.png'
import rightPaper from './images/right-paper.png'
import rightScissors from './images/right-scissors.png'
import leftRock from './images/left-rock.png'
import leftPaper from './images/left-paper.png'
import leftScissors from './images/left-scissors.png'


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

      if (countdown >= 2) {
        this.setState(({countdown}) => ({
          countdown: countdown - 1
        }))
      } else if (countdown < 2 && countdown >= 0) {
        this.setState(({countdown}) => ({ 
          weHaveAWinner: true,
          winner: winner,
          countdown: countdown - 1
         }))
      } else if (countdown < 0) {
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
    if(this.state.countdown > 0) {
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
  }

  render() {
    let renderWinner
    let startButton
    let leftPlayer
    let rightPlayer
    let leftPlayerChoice
    let rightPlayerChoice

    if (this.state.leftChoice === 'rock') {
      leftPlayerChoice = <Image size='small' src={leftRock}/>
    } else if (this.state.leftChoice === 'paper') {
      leftPlayerChoice = <Image size='small' src={leftPaper}/>
    } else if (this.state.leftChoice === 'scissors') {
      leftPlayerChoice = <Image size='small' src={leftScissors}/>
    }
    
    if (this.state.rightChoice === 'rock') {
      rightPlayerChoice = <Image size='small' src={rightRock}/>
    } else if (this.state.rightChoice === 'paper') {
      rightPlayerChoice = <Image size='small' src={rightPaper}/>
    } else if (this.state.rightChoice === 'scissors') {
      rightPlayerChoice = <Image size='small' src={rightScissors}/>
    }

    if (this.state.weHaveAWinner === true) {
      renderWinner = <Header className="text" as="h1" id="winner">{this.state.winner}!</Header>
      if (leftPlayerChoice) {
        leftPlayer = leftPlayerChoice
      } else {
        leftPlayer = <Image size='small' src={leftRock}/>
      }
      if (rightPlayerChoice) {
        rightPlayer = rightPlayerChoice
      } else {
        rightPlayer = <Image size='small' src={rightRock}/>
      }
    } else {
      leftPlayer   = <Image size='small' src={leftRock}/>
      rightPlayer  = <Image size='small' src={rightRock}/>
    }

    if (this.state.countdown === 4) {
      startButton = <Button id="start-game" className='Button' onClick={this.startGame}>Start!</Button>
    }

    return (
      <Container align="center">
        <Container style={{height: "100px", paddingTop: '10%'}}>
          {startButton}
          <Countdown countdown={this.state.countdown}/>
          {renderWinner}  
        </Container>
        <Container style={{display: 'flex', justifyContent: 'space-evenly', paddingTop: '10%'}}>
            {leftPlayer}
            {rightPlayer}
        </Container>
      </Container>
    )
  }
}

export default App