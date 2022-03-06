import './style.css'
// ----------Practice creating variables--------------
const numberOfCupsOfCoffee = 0
const fullName = 'Lauren McCall'
console.log(`${fullName}  drinks ${numberOfCupsOfCoffee} cups of coffee a day`)
const aboutMe = {
  fullName: 'Lauren McCall',
  luckyNumber: 18,
  favoriteMovies: ['Arrival', 'Encanto', 'Pig', 'Chicago', 'Melancholia'],
}
console.table(aboutMe)

// ---------Practice getting input from the user-------------
const userName = window.prompt('What is your name?')
// QUESTION: why is userName not same color as above interpolation?
console.log('Hello, ${userName}')
