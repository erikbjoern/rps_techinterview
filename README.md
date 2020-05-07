# [WIP] Rock, Paper, Scissors game

* Project scaffolded with create-react-app
* Cypress installed for feature tests
* Game rules are implemented
* Player hotkeys are implemented
* Timer on interval is implemented
* Following visuals are implemented:
  * Players can see:
    * a visual representation of the timer, ticking
    * a button to start the game and timer
    * a representation of both players
    * a representation of both players' choices
    * their score
    * their score increase when they win
    * the score limit
    * the final winner when score limit is reached
    * a sheet of the keybindings used for the hotkeys
    * nice colors, fonts, and images!

## Plan for improvements next in line:
* Players choices should be reset when winner is determined
* Player hotkeys should be visible on the screen
* Players should be able to start the timer when they want to
* Players should accumulate points for each victory
* There should be a score limit at which the timer stops and a final winner is determined

## User Stories
### 1. The Game rules
```
As a player
In order to play by the game rules
I want 'rock' to win over 'scissors'
I want 'scissors' to win over 'paper'
I want 'paper' to win over 'rock'
```
### 2. Player hotkeys

```
In order to play a game of 'rock paper scissors' against another person
I want the application to allow for two local players playing against each other

As a player
In order not to give away my choice of 'rock', 'paper' or 'scissors' by typing or using the mouse
I want to be able to make my choice by using a single key for each choice
```
### 3. Automatically determine winner after timeout
```
In order to keep the game exciting
I want there to be a short time limit within which the player has to pick their choice
```
### 4. Visuals
#### 4.1 Start button
```
In order to be ready when the game starts
I want to start the timer manually
```
#### 4.2 Countdown
```
In order to know how long I have to make my pick
I want there to be a visual representation of the timer
```
#### 4.3 Score
```
In order to keep track of my and my opponents score
I want it to be displayed on the screen
```
#### 4.4 Score limit
```
In order to determine a final winner
I want there to be a score limit to determine the winning score
```
#### 4.5 Hotkeys sheet
```
In order to know which key represents which choice
I want the keybindings of the hotkeys to be displayed
```
