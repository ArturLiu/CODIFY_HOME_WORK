//! 1

// const obj = {
//     name:'Arthur',
//     age: 16,

//     logObject: function() {
//         console.log('Имя - ' + this.name )
//         console.log('Возраст - ' + this.age)
// }
// }

//! 2

// const car = {
//     mark: 'BWM',
  
//     getMark: function() {
//       return "Моя машина - " + this.mark
//     }
//   }
  
//   console.log(car.getMark())

//! 3

// const circle = {
//     radius: 5,
  
//     findS: function() {
//       return Math.PI * this.radius * this.radius
//     }
//   }
  
//   const S = circle.findS()
//   console.log("Площадь круга: " + S)

//! 4 

// const calculator = {
//     num1: 2,
//     num2: 5,

//     add: function() {
//         return this.num1 + this.num2
//     },

//     multiply: function() {
//         return this.num1 * this.num2
//     }
// }

// const addNum = calculator.add()
// const multiplyNum = calculator.multiply()

// console.log("Сумма: " + addNum)
// console.log("Произведение: " + multiplyNum)

//! 5

// function getWeekday() {
//     const weekdays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
//     return weekdays[this.getDay()]
//   }
  
//   const currentDate = new Date()
//   const currentWeekday = getWeekday.call(currentDate)
//   console.log("Сегодня " + currentWeekday)

//! 6

// const product = {
//     name: 'Milk',
//     price: 20,
  
//     ProductInfo: function() {
//       console.log('Продукт ' + this.name + ' стоит ' + this.price + ' долларов')
//     }
//   }

// product.ProductInfo()

//! 7

// const animal = {
//     name: 'Elephant',
  
//     makeAnoise: function(noise) {
//       console.log(this.name + ' издает звук ' + noise)
//     }
//   }

//   animal.makeAnoise('ТРУУУУУУМ')
  