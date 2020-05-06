# [WIP] Rock, Paper, Scissors game

* Project scaffolded with create-react-app
* Cypress installed for feature tests
* Game rules are implemented
* Player hotkeys are implemented
* Timer on interval is implemented
* Visual representation of the timer is implemented

## Plan for improvements next in line:
* Players choices should be reset when winner is determined
* Player hotkeys should be visible on the screen
* Players should be able to start the timer when they want to
* Players should accumulate points for each victory
* There should be a score limit at which the timer stops and a final winner is determined

## User Stories
### 1. The Game rules
```
As a user
In order to play by the game rules
I want 'rock' to win over 'scissors'
I want 'scissors' to win over 'paper'
I want 'paper' to win over 'rock'
```
### 2. Player hotkeys

```
As a user
In order to play a game of 'rock paper scissors' against another person
I want the application to allow for two local players playing against each other


As a local player
In order not to give away my choice of 'rock', 'paper' or 'scissors' by typing or using the mouse
I want to be able to make my choice by using a single key for each choice
```
### 3. Automatically determine winner after timeout
```
As a player
In order to keep the game exciting
I want there to be a short time limit within which the player has to pick their choice
```
### 4. Visuals
#### Player sees a visual representation of the timer
```
As a player
In order to know how long I have to make my pick
I want there to be a visual representation of the timer
```
