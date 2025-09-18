console.log('-----------Spread Operator------------')

const fruits = ['Apples', 'Banana', 'Orange']
const vegetables = ['Cucumber', 'Radish']
const a = [...fruits, ...vegetables]
console.log(a)

console.log('-----------Function changes the property value----------')

const developer = {
  salary: 100000,
  experience: 4.5,
  techStack: ['Vue', 'HTML', 'CSS'],
  lookingForWork: true,
  doubleSalary: function () {
    this.salary = this.salary * 2
    this.lookingForWork = false
  },
}
console.log(developer.salary)
console.log(developer.lookingForWork)
console.log('After calling function:')
developer.doubleSalary()
console.log(developer.salary)
console.log(developer.lookingForWork)

console.log('----------------Map method--------------')
const numbers = [1, 2, 3, 4, 5]
const square = numbers.map((number) => number * number)
console.log(square)

console.log('----------------Dynamic Object Keys--------------')
// Use dynamic object keys when the property name needs to be set dynamically at runtime.

const favoriteFood = 'sushi'
const goodFoods = {
  [favoriteFood]: true,
}
console.log(goodFoods)

const field = 'email'
const user = { [field]: 'shoaibali.rts@gmail.com' }
console.log(user)

const id = 123
const lookup = { [id]: 'Record for 123' }
console.log(lookup)

console.log('---------setTimeout, setInterval, and clearInterval functions---------------')

// setTimeout(() => {
//   console.log('wait for 2 seconds and then execute this callback function')
// }, 2000)

// setInterval(() => {
//   console.log('Execute this callback after every 2 seconds')
// }, 2000)
// console.log('hello interval')

const interval = setInterval(() => {
  console.log('Execute this callback after every 2 seconds') // 2+2+2+2
}, 2000)

setTimeout(() => {
  clearInterval(interval)
}, 10000)
