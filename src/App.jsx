import React, { Component } from 'react'
import { Container, Image, Header, Button, Grid } from 'semantic-ui-react'

import Countdown from './components/Countdown'
import HotkeysSheet from './components/HotkeysSheet'
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
    countdown: 5,
    leftPlayerScore: 0,
    rightPlayerScore: 0
  }

  componentDidMount(){
    document.addEventListener('keydown', this.onKeyDownHandler)
  }

  gameOn = setInterval(() => {
    const winner = determineWinner(this.state.leftChoice, this.state.rightChoice)
    const countdown = this.state.countdown

    if (countdown >= 2 && countdown < 5) {
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
      this.handleWinner()
    }
  }, 1000)

  startGame = () => {
    this.setState({
      countdown: 4,
      weHaveAWinner: false,
      leftPlayerScore: 0,
      rightPlayerScore: 0
    })

    return this.gameOn

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
  
  handleWinner = () => {
    const leftPlayerScore = this.state.leftPlayerScore
    const rightPlayerScore = this.state.rightPlayerScore

    if (rightPlayerScore === 10) {
      this.setState({ 
        countdown: 5,
        weHaveAWinner: true,
        winner: 'Right player wins it all'
      })
      clearInterval(this.gameOn)
    }
    if (leftPlayerScore === 10) {
      this.setState({ 
        countdown: 5,
        weHaveAWinner: true,
        winner: 'Left player wins it all'
      })
      clearInterval(this.gameOn)
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
      renderWinner = <Header className="text" as="h1" id="winner" style={{position: "absolute", margin: "0, auto", left: "0", right: "0", top: "150px"}}>{this.state.winner}!</Header>
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

    if (this.state.countdown === 5) {
      startButton = <Button id="start-game" className='Button' onClick={this.startGame}>Start!</Button>
    }

    return (
      <Container align="center">
        <Header as="h3" id="score-limit" style={{paddingTop: "30px", color: "#cdffcd"}}>First to 10 wins!</Header>
        <Container style={{height: "90px", paddingTop: '2%'}}>
          {startButton}
          <Countdown countdown={this.state.countdown}/>
        </Container>
          {renderWinner}
        <Container style={{display: 'flex', justifyContent: 'space-evenly', paddingTop: '15%', marginBottom: '4%'}}>
            {leftPlayer}
            {rightPlayer}
        </Container>
        <Grid fluid>
          <Grid.Row style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <Header className="score" as="h1" id="leftPlayerScore">{leftPlayerScore}</Header> 
          <Header className="score" as="h1" id="rightPlayerScore">{rightPlayerScore}</Header> 
          </Grid.Row>
        </Grid>
        <HotkeysSheet/>
      </Container>
    )
  }
}

export default App