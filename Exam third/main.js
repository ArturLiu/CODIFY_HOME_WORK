//! 1

// let num = 20
// let string = 'one'
// let boolean = true

// console.log(num, string, boolean)

//! 2

// let string1 = '20'
// let num1 = parseInt(string1)
// let num2 = 20
// let string2 = num2.toString()

// console.log(num1,string2)

//! 3 

// let arr = [1, 2, 3, 4, 5]
// for (let i = 0; i < 6; i++) {
//     console.log(i)
// }

//! 4

// const person = {
//     Name: 'Arthur',
//     Age: 16,
//     city: 'Bishkek',
// }

// console.log(person.Name, person.Age, person.city)

//! 5

// let a = 3

//     if (a % 2 === 0) {
//         console.log('Четное') 
//     } else {
//         console.log('Нечетное')
//     }

//! 6

// for(let i = 0; i <= 10; i++) {
//     console.log(i)
// }

//! 7

// function declaration() {
//     console.log('Hello world!')
// }

// declaration()

// const expression = function() {
//     console.log('Hello world!')
// }

// expression()

// const arrow = () => {
//     console.log('Hello world!')
// }

// arrow()

//! 8 

// const successfulPromise = new Promise((onResolve, onReject) => {
//     onResolve("Успешное выполнение");
// });

// const errorPromise = new Promise((onResolve, onReject) => {
//     onReject(new Error("Ошибка выполнения"))
// });

// successfulPromise
//     .then(result => console.log(result))
//     .catch(error => console.error("Ошибка:", error.message))

// errorPromise
//     .then(result => console.log(result))
//     .catch(error => console.error("Ошибка:", error.message))

//! доп 

//! 8

// function filterNums(arr) {
//     return arr.filter(number => number > 10 && number < 20)
// }

// const arr1 = [123,234,345,45,13,24,6,7,4,16]
// const filteredNums = filterNums(arr1)

// console.log(filteredNums)

//! 1

// function mid(arr) {
//     if (arr.length === 0) {
//         return 0.0
//     }

//     const sum = arr.reduce((acc, current) => acc + current, 0)
//     const mid = sum / arr.length

//     return mid
// }

// const arr1 = [1, 2, 3, 4, 5]
// const result = mid(arr1)
// console.log(result)

//! 7

// function filterBySalary(employeeArray) {
//     return employeeArray.filter(person => person.salary > 50000)
// }

// let employees = [
//     { name: "John", salary: 60000 },
//     { name: "Jane", salary: 45000 },
//     { name: "Bob", salary: 55000 }
// ]

// let highPaidEmployees = filterBySalary(employees)
// console.log(highPaidEmployees)

//! 6

// let number = [1, 2, 3, 4, 5]

//     let evenNumber = number
//     .slice()
//     .filter(num => num % 2 === 0)
    
//     let result = evenNumber.join(",")
//     console.log(result)

// //! 5

//     function sortObj(arr) {
//         return arr.sort((a, b) => a.name.localeCompare(b.name))
//         }
        
//         let persons = [
//         { name: "vadim" },
//         { name: "mary" },
//         { name: "dastan" }
//         ]
        
//         let sorted = sortObj(persons)
//         console.log(sorted)







