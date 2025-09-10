const fruits = ['Apples', 'Banana', 'Orange']
const vegetables = ['Cucumber', 'Radish']
const a = [...fruits, ...vegetables]
console.log(a)

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
