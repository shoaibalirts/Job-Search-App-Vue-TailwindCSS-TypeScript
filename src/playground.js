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
