//! №1

// const age = 16; 

// if (age >= 18) {
//   console.log("Совершеннолетний")
// } else {
//   console.log("Несовершеннолетний")
// }

//! №2

// const isStudent = true

// if (isStudent) {
//   console.log("Студент")
// } else {
//   console.log("Не студент")
// }

//! №3

// const num1 = 5
// const num2 = 10

// const a = num1 + num2

// console.log(a)

//! #4

// const day = 3
// switch (day) {
//   case 1:
//     console.log("Понедельник")
//     break
//   case 2:
//     console.log("Вторник")
//     break
//   case 3:
//     console.log("Среда")
//     break
//   case 4:
//     console.log("Четверг")
//     break
//   case 5:
//     console.log("Пятница")
//     break
//   case 6:
//     console.log("Суббота")
//     break
//   case 7:
//     console.log("Воскресенье")
//     break
// }

//! №5

// const temperature = 20; 

// if (temperature >= 30) {
//   console.log("Горячо")
// } else if (temperature >= 15) {
//   console.log("Тепло")
// } else {
//   console.log("Холодно")
// }

//! №6

// const score = 75

// const result = score >= 60 ? "Сдал" : "Не сдал"
// console.log(result)

//! №7

// const num = 5

// if (num % 2 === 0) {
//   console.log("Четное")
// } else {
//   console.log("Нечетное")
// }

//! №8

// const language = "JS"

// if (language === "JS") {
//   console.log("Поддерживается")
// } else {
//   console.log("Не поддерживается")
// }

//! №9 

// const userRole = "viewer"

// if (userRole === "admin") {
//   console.log("Доступ разрешен")
// } else if (userRole === "editor") {
//   console.log("Доступ ограничен")
// } else if (userRole === "viewer") {
//   console.log("Доступ запрещен")
// }

//! №10

// const a = 30
// const b = 25
// const c = 20

// let max;

// if (a >= b && a >= c) {
//   max = a
// } else if (b >= a && b >= c) {
//   max = b
// } else {
//   max = c
// }

// console.log(max)

//! №11

// const fruit = "яблоко"

// if (fruit === "яблоко") {
//   console.log("Красное")
// } else if (fruit === "банан") {
//   console.log("Желтый")
// } else if (fruit === "апельсин") {
//   console.log("Оранжевый")
// } else {
//   console.log("Другой цвет")
// }

//! №12

// const income = 15000

// const result = income > 50000 ? "Высокий доход" : income > 20000 ? "Средний доход" : "Низкий доход"
// console.log(result)

//! №13

// const grade = "F"
// switch(grade) {
//     case "A":
//         console.log("Отлично")
//         break
//     case "B":
//         console.log("Хорошо")
//         break
//     case "C":
//         console.log("Нормально")
//         break
//     case "D":
//         console.log("Тухловато")
//         break
//     case "F":
//         console.log("Кринжанул")
//         break
// }

//! №14

// const password = "Копицнадежныйпароль"

// if (password.length >= 8) {
//   console.log("Пароль надежный")
// } else {
//   console.log("Пароль слишком короткий")
// }

//! №15

// const x = 10
// const y = 5

// const result = x > y ? "x больше y" : x < y ? "y больше x" : "x и y равны"
// console.log(result)

//! №16

// const isRaining = false

// const result = isRaining ? "Идет дождь" : "Дождя нет"
// console.log(result)

//! №17

// const isLeapYear = false

// const result = isLeapYear ? "Год високосный" : "Год не високосный"
// console.log(result)

//! №18

// const userInput = ""

// const result = userInput === "" ? "Пустая строка" : "Строка не пуста"
// console.log(result);

//! №19

// const num = 10

// if (num > 0) {
//   console.log("Положительное")
// } else if (num < 0) {
//   console.log("Отрицательное")
// } else {
//   console.log("Ноль")
// }

//! №20

// const dayOfWeek = "сб"

// switch(dayOfWeek) {
//     case "пн":
//         console.log("Рабочий день")
//         break
//     case "вт":
//         console.log("Рабочий день")
//         break
//     case "ср":
//         console.log("Рабочий день")
//         break
//     case "чв":
//         console.log("Рабочий день")
//         break
//     case "пт":
//         console.log("Рабочий день")
//         breal  
//     case "сб":
//         console.log("Выходной")
//         break
//     case "вс":
//         console.log("Выходной")
//         break
// }

//! №21

// function isPrime(number) {
//     if (number <= 1) {
//       return false
//     }
//     if (number <= 3) {
//       return true
//     }
  
//     if (number % 2 === 0 || number % 3 === 0) {
//       return false
//     }
  
//     for (let a = 5; a * a <= number; a += 6) {
//       if (number % a === 0 || number % (a + 2) === 0) {
//         return false
//       }
//     }
  
//     return true;
//   }
  
//   const numbercheck = 17
//   const isPrimeResult = isPrime(numbercheck)
  
//   if (isPrimeResult) {
//     console.log(`${numbercheck} - простое число`)
//   } else {
//     console.log(`${numbercheck} - не простое число`)
//   }

//! №23

// const examScore = 85
// const homeworkScore = 92;

// const totalScore = examScore + homeworkScore

// if (totalScore > 90) {
//   console.log("A")
// } else if (totalScore >= 80 && totalScore <= 89) {
//   console.log("B")
// } else if (totalScore >= 70 && totalScore <= 79) {
//   console.log("C")
// } else if (totalScore >= 60 && totalScore <= 69) {
//   console.log("D")
// } else {
//   console.log("F")
// }

//! №25

// const month = 8
// const year = 2007

// let season

// if (month >= 1 && month <= 12) {
//   switch (month) {
//     case 12:
//     case 1:
//     case 2:
//       season = "зима"
//       break
//     case 3:
//     case 4:
//     case 5:
//       season = "весна"
//       break
//     case 6:
//     case 7:
//     case 8:
//       season = "лето"
//       break
//     case 9:
//     case 10:
//     case 11:
//       season = "осень"
//       break
//   }
// }
// console.log(`Сезон: ${season}`);





