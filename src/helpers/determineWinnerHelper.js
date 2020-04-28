export const determineWinner = (leftChoice, rightChoice) => {
  
  const winner = compare(leftChoice, rightChoice)
  return winner

}
  
  const compare = (leftChoice, rightChoice) => {
    switch (leftChoice) {
      //when leftChoice is rock
      case 1:
        //...and rightChoice is rock
        if (rightChoice === 1) {
          //tie 
          return 'Tie'
        }
        //...and rightChoice is paper
        else if (rightChoice === 2) {
          //paper wins 
          return 'Right'
        }
        //...and rightChoice is scissors 
        else if (rightChoice === 3) {
          //scissors win 
          return 'Left'
        }
      //when leftChoice is paper
      case 2:
        //...and rightChoice is rock
        if (rightChoice === 1) {
          //paper wins 
          return 'Left'
        }
        //...and rightChoice is paper
        else if (rightChoice === 2) {
          //tie 
          return 'Tie'
        }
        //...and rightChoice is scissors 
        else if (rightChoice === 3) {
          //scissors win 
          return 'Right'
        }
      //when leftChoice is scissors
      case 3:
        //...and rightChoice is rock
        if (rightChoice === 1) {
          //rock wins 
          return 'Right'
        }
        //...and rightChoice is paper
        else if (rightChoice === 2) {
          //scissors win 
          return 'Left'
        }
        //...and rightChoice is scissors 
        else if (rightChoice === 3) {
          //tie 
          return 'Left'
        }
    }
  }
