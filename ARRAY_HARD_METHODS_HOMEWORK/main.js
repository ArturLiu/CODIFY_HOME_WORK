//! #1

// function plusTen(arr) {
//     const secondArr = arr.map((num) => num + 10)
//     return secondArr
//   }
  
//   const firstArr = [1,2,3,4,5]
//   const arr = plusTen(firstArr)
  
//   console.log(arr)

//! #2

// function filtar(arr) {
//     return arr.filter((word) => word.length > 5)
//   }
  
//   const firstArr = ['Train', 'car', 'bicycle', 'airplane']
//   const arr = filtar(firstArr)
  
//   console.log(arr)  

//! #3

// function Sq(arr) {
//     arr.forEach((number) => {
//       const square = number * number
//       console.log(square)
//     })
//   }
  
//   const firstArr = [1,2,3,4,5]
//   Sq(firstArr)

//! #4

// function sumArray(arr) {
//     return arr.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0)
//   }
  
//   const firstArr = [1,2,3,4,5]
//   const FullSum = sumArray(firstArr)
  
//   console.log(FullSum)

//! #5

// function primeNumber(arr) {
//     return arr.some((number) => number % 2 === 0)
//   }
  
//   const firstArr = [1,2,3,4,5]
//   const arr = primeNumber(firstArr)
  
//   console.log(arr)

//! #6

// function PositiveNums(arr) {
//     return arr.every((number) => number > 0)
//   }
  
//   const firstArr = [1,2,3,4,-5]
//   const arr = PositiveNums(firstArr)
  
//   console.log(arr)

//! #7

// function evenNums(arr) {
//     const firstEven = arr.find((number) => number % 2 === 0)
//     return firstEven || null
//   }
  
//   const firstArr = [1,1,1,1]
//   const arr = evenNums(firstArr)

//   console.log(arr)

//! #8

// function upCase(stringsArray) {
//     return stringsArray.map((str) => str.toUpperCase())
//   }
  
//   const firstArr = ['train', 'car', 'bicycle', 'airplane']
//   const upCaseArr = upCase(firstArr)
  
//   console.log(upCaseArr)

//! #9

// function filtar(firstArr) {
//     return firstArr.filter((number) => number > 0)
//   }
  
//   const firstArr = [1,2,-3,4,-5]
//   const positiveNums = filtar(firstArr)
  
//   console.log(positiveNums)

//! #10

// function Hi(firstArr) {
//     firstArr.forEach((name) => {
//       console.log(`Hello, ${name}!`)
//     });
//   }
  
//   const firstArr = ['Arthur','Timur','Emil']
//   Hi(firstArr)

//! #11

// function calculateNums(FirstArr) {
//     return firstArr.reduce((accumulator, number) => accumulator * number, 1)
//   }
  
//   const firstArr = [1,2,3,4,5]
//   const arr = calculateNums(firstArr)
  
//   console.log(arr)

//! #12

// function stringMoreThanTen(firstArr) {
//     return firstArr.some((str) => str.length > 10)
//   }
  
//   const firstArr = ['asdqweasd','dwqdasfd','dwqsafegqqfdwfqwfd']
//   const arr = stringMoreThanTen(firstArr)
  
//   console.log(arr)

//! #13

// function FirstNum(firstArr) {
//     const BySeven = firstArr.find((number) => number % 7 === 0)
//     return BySeven || null
//   }
  
//   const firstArr = [1,2,3,4,5,6,7]
//   const arr = FirstNum(firstArr)
  
//   console.log(arr)