//! 1

// document.addEventListener('keydown', function(event) {
//     if (event.key === '1') {
//         document.body.style.backgroundColor = 'red'
//     } else if (event.key === '2') {
//         document.body.style.backgroundColor = 'green'
//     } else if (event.key === '3' && !event.shiftKey) {
//         document.body.style.backgroundColor = 'blue'
//     } else if (event.key === '4') {
//         document.body.style.backgroundColor = 'white'
//     } else if (event.key === '5' && event.shiftKey) {
//         document.body.style.backgroundColor = 'black'
//     } else if (event.key === '6' && event.shiftKey) {
//         document.body.style.backgroundColor = 'gray'
//     }
// })

//! 2

//? Первый вариант(я не знаю :/ . i = 0, если увеличивать на 2 то получится всё равно ноль)

// let i = 0

// document.getElementById('btn1').addEventListener('click', function() {
//     console.log(i)
//     i *= 2
// })

//? Второй вариант(скорее так)

// let i = 0

// document.getElementById('btn1').addEventListener('click', function() {
//     console.log(i)
//     if (i === 0) {
//         i = 1
//     } else {
//         i *= 2
//     }
// })

//! 3

// document.getElementById('translucentButton').addEventListener('click', function() {
//     const image = document.getElementById('img1')
//     image.style.opacity = 0
// })

//! 4

// const inputText = document.querySelector('.input-text')
// const outputText = document.querySelector('.output-text')

// inputText.addEventListener('input', function() {
//     outputText.textContent = inputText.value
// })

//! 5

// const myDiv = document.getElementById('div1')

// myDiv.addEventListener('click', function(event) {
//     const x = event.clientX - myDiv.getBoundingClientRect().left
//     const y = event.clientY - myDiv.getBoundingClientRect().top

//     console.log(`x=${x}, y=${y}`)
// })

//! 6

// const colorInput = document.getElementById('colorInput')

//     colorInput.addEventListener('input', function() {
//         document.body.style.backgroundColor = colorInput.value
//     })