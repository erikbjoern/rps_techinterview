export const determineWinner = (leftChoice, rightChoice) => {
  
  const winner = compare(leftChoice, rightChoice)
  return winner

}
  
  const compare = (leftChoice, rightChoice) => {
    if (leftChoice == rightChoice) {
      return 'Tie'
    } else if ((leftChoice == "rock") && (rightChoice == "scissors")) {
      return 'Left wins'
    } else if ((leftChoice == "rock") && (rightChoice == "paper")) {
      return 'Right wins'
    } else if ((leftChoice == "paper") && (rightChoice == "rock")) {
      return 'Left wins'
    } else if ((leftChoice == "paper") && (rightChoice == "scissors")) {
      return 'Right wins'
    } else if ((leftChoice == "scissors") && (rightChoice == "paper")) {
      return 'Left wins'
    } else if ((leftChoice == "scissors") && (rightChoice == "rock")) {
      return 'Right wins'
    }
  }