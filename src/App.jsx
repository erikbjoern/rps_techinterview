import React, { Component } from 'react'
import { Container, Image, Header, Button, Grid } from 'semantic-ui-react'

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
    countdown: 4,
    leftPlayerScore: 0,
    rightPlayerScore: 0
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
        this.handleScore()
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

  handleScore = () => {
    const winner = this.state.winner 
    const leftPlayerScore = this.state.leftPlayerScore
    const rightPlayerScore = this.state.rightPlayerScore

    if (winner === 'Left player wins') {
      this.setState({ leftPlayerScore: leftPlayerScore + 1 })
    }
    if (winner === 'Right player wins') {
      this.setState({ rightPlayerScore: rightPlayerScore + 1 })
    }
  }

  render() {
    let renderWinner
    let startButton
    let leftPlayer
    let rightPlayer
    let leftPlayerChoice
    let rightPlayerChoice
    let leftPlayerScore  = this.state.leftPlayerScore
    let rightPlayerScore = this.state.rightPlayerScore

    if (this.state.leftChoice === 'rock') {
      leftPlayerChoice = <Image id="leftPlayerChoice" size='small' src={leftRock}/>
    } else if (this.state.leftChoice === 'paper') {
      leftPlayerChoice = <Image id="leftPlayerChoice" size='small' src={leftPaper}/>
    } else if (this.state.leftChoice === 'scissors') {
      leftPlayerChoice = <Image id="leftPlayerChoice" size='small' src={leftScissors}/>
    }
    
    if (this.state.rightChoice === 'rock') {
      rightPlayerChoice = <Image id="rightPlayerChoice" size='small' src={rightRock}/>
    } else if (this.state.rightChoice === 'paper') {
      rightPlayerChoice = <Image id="rightPlayerChoice" size='small' src={rightPaper}/>
    } else if (this.state.rightChoice === 'scissors') {
      rightPlayerChoice = <Image id="rightPlayerChoice" size='small' src={rightScissors}/>
    }

    if (this.state.weHaveAWinner === true) {
      renderWinner = <Header className="text" as="h1" id="winner">{this.state.winner}!</Header>
      if (leftPlayerChoice) {
        leftPlayer = leftPlayerChoice
      } else {
        leftPlayer = <Image id="leftPlayerChoice" size='small' src={leftRock}/>
      }
      if (rightPlayerChoice) {
        rightPlayer = rightPlayerChoice
      } else {
        rightPlayer = <Image id="rightPlayerChoice" size='small' src={rightRock}/>
      }
    } else {
      leftPlayer   = <Image id="leftPlayer" size='small' src={leftRock}/>
      rightPlayer  = <Image id="rightPlayer" size='small' src={rightRock}/>
    }

    if (this.state.countdown === 4) {
      startButton = <Button id="start-game" className='Button' onClick={this.startGame}>Start!</Button>
    }

    return (
      <Container align="center">
        <Header as="h3" id="score-limit" style={{paddingTop: "40px", color: "#cdffcd"}}>First to 10 wins!</Header>
        <Container style={{height: "100px", paddingTop: '6%'}}>
          {startButton}
          <Countdown countdown={this.state.countdown}/>
          {renderWinner}  
        </Container>
        <Container style={{display: 'flex', justifyContent: 'space-evenly', paddingTop: '10%', marginBottom: '10%'}}>
            {leftPlayer}
            {rightPlayer}
        </Container>
        <Grid fluid>
          <Grid.Row style={{display: 'flex', justifyContent: 'space-evenly', paddingTop: '10%', alignItems: 'center'}}>
          <Header className="score" as="h1" id="leftPlayerScore">{leftPlayerScore}</Header> 
          <Header className="score" as="h1" id="rightPlayerScore">{rightPlayerScore}</Header> 
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default App