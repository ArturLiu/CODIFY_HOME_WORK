//! 1

// const promies = new Promise((onResolve) => {
//     setTimeout(() => {
//         onResolve('Promise выполнено')
//     }, 2000)
// })

// promise.then((result) => {
//     console.log(result)
// })

//! 2

// const promise = new Promise((onResolve, onReject) => {
//     setTimeout(() => {
//         onReject('ошибка')
//     }, 3000)
// })

// promise.catch((error) => {
//     console.error('Произошла', error)
// })

//! 3 

// function primNums(number) {
//     return new Promise((onResolve, onReject) => {
//         setTimeout(() => {
//             if(number % 2 === 0) {
//                 return onResolve('Четное число')
//             } else {
//                 return onReject('Нечетное число') 
//             }
//         }, 3000)
//     })
// }

// primNums(1)
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((error) => {
//         console.error(error)
//     })

//! 4

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Проблемы с сетевым подключением')
//         }
//         return response.json()
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error => {
//         console.error('Случилась проблема с fetch:', error)
//     })


