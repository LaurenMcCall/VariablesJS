import './style.css'
// ----------Practice creating variables--------------
const numberOfCupsOfCoffee = 0
const fullName = 'Lauren McCall'
console.log(`${fullName} drinks ${numberOfCupsOfCoffee} cups of coffee a day`)
const aboutMe = {
  fullName: 'Lauren McCall',
  luckyNumber: 18,
  favoriteMovies: ['Arrival', 'Encanto', 'Pig', 'Chicago', 'Melancholia'],
}
console.table(aboutMe)

// ---------Practice getting input from the user-------------
const userName = window.prompt('What is your name?')
console.log(`Hello, ${userName}`)

// ------------Converting string input from the user-----------
const firstNumber = window.prompt('Enter a number.')
const secondNumber = window.prompt('Enter another number.')
const firstOperand = Number(firstNumber)
const secondOperand = Number(secondNumber)

// ----------Doing math -----------------
const sum = firstOperand + secondOperand
const difference = firstOperand - secondOperand
const product = firstOperand * secondOperand
const quotient = firstOperand / secondOperand
const remainder = firstOperand % secondOperand
console.log(`If you add ${firstOperand} and ${secondOperand} you get ${sum}`)
console.log(
  `If you subtract ${secondOperand} from ${firstOperand} you get ${difference}`
)
console.log(
  `If you multiply ${firstOperand} and ${secondOperand} you get ${product}`
)
console.log(
  `If you divide ${firstOperand} by ${secondOperand} you get ${quotient}`
)
console.log(
  `If you divide ${firstOperand} by ${secondOperand} you get a remainder of ${remainder}`
)
