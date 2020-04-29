export const determineWinner = (leftChoice, rightChoice) => {
  
  const winner = compare(leftChoice, rightChoice)
  return winner

}
  
  const compare = (leftChoice, rightChoice) => {
    if (leftChoice == rightChoice) {
      return 'Tie'
    } else if ((leftChoice == 1) && (rightChoice == 3)) {
      return 'Left wins'
    } else if ((leftChoice == 1) && (rightChoice == 2)) {
      return 'Right wins'
    } else if ((leftChoice == 2) && (rightChoice == 1)) {
      return 'Left wins'
    } else if ((leftChoice == 2) && (rightChoice == 3)) {
      return 'Right wins'
    } else if ((leftChoice == 3) && (rightChoice == 2)) {
      return 'Left wins'
    } else if ((leftChoice == 3) && (rightChoice == 1)) {
      return 'Right wins'
    }
  }