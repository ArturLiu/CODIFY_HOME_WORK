document.addEventListener('DOMContentLoaded', function() {
    const h3Elements = document.querySelectorAll('h3')
    h3Elements.forEach(function (h3) {
        h3.textContent = '!!!'
        h3.style.color = 'green'
    });

    const ul = document.createElement('ul')
    for (let i = 1; i <= 30; i++) {
        const li = document.createElement('li')
        li.textContent = `${i} - овечка`
        ul.appendChild(li)
    }
    document.body.appendChild(ul)

    const spans = document.getElementsByTagName('span')
    for (const span of spans) {
        span.classList.add('active')
    }

    const strongElements = document.getElementsByTagName('strong')
    for (const strong of strongElements) {
        strong.style.color = 'green'
    }

    const emElements = document.getElementsByTagName('em')
    for (const em of emElements) {
        em.classList.add('selected')
    }

    const marksInRow = document.querySelectorAll('.row mark')
    marksInRow.forEach(function (mark) {
        mark.classList.add('selected')
    });

    const links = document.querySelectorAll('a')
    links.forEach(function (link) {
        link.style.textDecoration = 'none'
    });

    const someStrongElements = document.querySelectorAll('strong.some')
    someStrongElements.forEach(function (strong) {
        strong.classList.toggle('some')
    })

    const rowElements = document.querySelectorAll('.row')
    if (rowElements.length >= 2) {
        rowElements[1].classList.remove('row')
    }

    const secondLinkColor = getComputedStyle(links[1]).color
    console.log('Color of the second link:', secondLinkColor)

    if (rowElements.length >= 3) {
        rowElements[2].classList.add('third')
    }

    const rowInnerElement = document.querySelector('.row-inner')
    rowInnerElement.style.color = 'pink'

    const inputElement = document.createElement('input')
    inputElement.type = 'text'
    inputElement.classList.add('input')
    document.querySelector('.row-input').appendChild(inputElement)
    inputElement.style.backgroundColor = 'yellow'
    inputElement.placeholder = 'Введите текст...'

    const rowOuterElement = document.querySelector('.row-outer')
    rowOuterElement.style.fontSize = '20px'

    const lastElement = document.querySelector('.last')
    lastElement.textContent = 'Last but not least'
})