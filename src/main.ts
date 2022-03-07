import './style.css'
// ----------Practice creating variables--------------
const numberOfCupsOfCoffee = 0
const fullName = 'Lauren McCall'
console.log(`${fullName} drinks ${numberOfCupsOfCoffee} cups of coffee a day`)
const aboutMe = {
  fullName: 'Lauren McCall',
  luckyNumber: 18,
  favoriteMovies: [
    'Arrival',
    'Encanto',
    'Pig',
    'Rogue One: A Star Wars Story',
    'Chicago',
    'Melancholia',
    'Life',
  ],
}
console.table(aboutMe)

// ---------Practice getting input from the user-------------
const userName = window.prompt('What is your name?')
console.log(`Hello, ${userName}!`)

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

// -----------------Using arrays---------------
const numbers = [
  43207, 38199, 34161, 25249, 26822, 28081, 26613, 32342, 33992, 41149, 25262,
  47914, 30950, 35602, 16126, 46221, 39197, 30357, 28636, 15612, 19359, 46243,
  15384, 31881, 32983, 17883, 34615, 20970, 30098, 19633, 46254, 18238, 34955,
  32309, 30384, 12301, 17808, 36691, 26143, 20935, 20766, 33352, 28601, 46779,
  28162, 22269, 46665, 10245, 19183, 15136, 23291, 41336, 19740, 35970, 46641,
  19744, 23915, 34326, 14637, 22449, 13484, 11379, 49578, 17238, 25426, 29319,
  31617, 17309, 42968, 21655, 31529, 35599, 26641, 19447, 44819, 26397, 33167,
  18721, 39754, 33845, 20676, 43762, 26427, 24730, 25215, 27842, 15110, 26256,
  36336, 42298, 41005, 22734, 25880, 19297, 12652, 11639, 28299, 33813, 34712,
  12244,
]
console.log(numbers)

const smallest = Math.min(...numbers)
console.log(smallest)
const largest = Math.max(...numbers)
console.log(largest)
const arraySum = numbers.reduce((arraySum, number) => arraySum + number, 0)
console.log(arraySum)
// QUESTION: Does this work too?
const average = arraySum / numbers.length
console.log(average)

const stats = {
  smallest: smallest,
  largest: largest,
  sum: arraySum,
  average: average,
}
console.log(stats)
