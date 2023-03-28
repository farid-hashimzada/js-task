let circleOne = document.querySelector('#one1')
let circleTwo = document.querySelector('#two2')
let circleThree = document.querySelector('#three3')

let changeBlue = () => {
    document.body.style.background = document.body.style.background ? '' : 'blue'
   
    // circleOne.style.color = circdy.style.backgroundColor ? '': leOne.style.backgroundColor ? 'white': 'blue'
}

let changeRed = () => {
    circleTwo.style.backgroundColor = circleTwo.style.backgroundColor ? '' : 'red'
    circleTwo.style.color = circleTwo.style.backgroundColor ? 'white' :'red'
}

let changeGreen = () => {
    circleThree.style.backgroundColor = circleThree.style.backgroundColor ? '' : 'green'
    circleThree.style.color = circleThree.style.backgroundColor ? 'white' : 'green'
}


// task 2 sollution

const input = document.querySelector('input')
const button = document.querySelector('button')
const circle = document.querySelector('.circleOne')

button.onclick = () => {
    const cost = input.value
    circle.style.width = cost + 'px'
    circle.style.height = cost + 'px'
}