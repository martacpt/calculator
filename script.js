//catching the inputs

const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const zero = document.getElementById('zero')
const zero2 = document.getElementById('zero2')

const clear = document.getElementById('clear')
const back = document.getElementById('back')
const percentage = document.getElementById('percentage')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const divide = document.getElementById('divide')
const multiply = document.getElementById('multiply')
const comma = document.getElementById('comma')
const equal = document.getElementById('equal')

const formula = document.getElementById('formula')
const display = document.getElementById('displayResult')


let currFormula = ''

one.addEventListener('click', () => {
    currFormula +=1
    formula.innerHTML = currFormula
})

two.addEventListener('click', () => {
    currFormula +=2
    formula.innerHTML = currFormula
})

three.addEventListener('click', () => {
    currFormula +=3
    formula.innerHTML = currFormula
})

four.addEventListener('click', () => {
    currFormula +=4
    formula.innerHTML = currFormula
})

five.addEventListener('click', () => {
    currFormula +=5
    formula.innerHTML = currFormula
})

six.addEventListener('click', () => {
    currFormula +=6
    formula.innerHTML = currFormula
})

seven.addEventListener('click', () => {
    currFormula +=7
    formula.innerHTML = currFormula
})

eight.addEventListener('click', () => {
    currFormula +=8
    formula.innerHTML = currFormula
})

nine.addEventListener('click', () => {
    currFormula +=9
    formula.innerHTML = currFormula
})

zero.addEventListener('click', () => {
    currFormula +=0
    formula.innerHTML = currFormula
})

zero2.addEventListener('click', () => {
    currFormula += 0
    currFormula += 0
    currFormula += 0
    formula.innerHTML = currFormula
})

clear.addEventListener('click', () => {
    currFormula = ''
    formula.innerHTML = currFormula
    display.innerHTML=''
})

back.addEventListener('click', () => {
    currFormula=currFormula.slice(0,currFormula.length-1)
    formula.innerHTML = currFormula
})

percentage.addEventListener('click', () => {
    display.innerHTML = calculation(currFormula)/100
    currFormula = "(" + currFormula + ")%"
    formula.innerHTML = currFormula
})

plus.addEventListener('click', () => {
    if (currFormula.includes('+') || currFormula.includes('-') || currFormula.includes('/') || currFormula.includes('*')) {
        display.innerHTML = 'Please make one calculation at a time'
    } else {
    currFormula += "+"
    formula.innerHTML = currFormula} 
})

minus.addEventListener('click', () => {
    if (currFormula.includes('+') || currFormula.includes('-') || currFormula.includes('/') || currFormula.includes('*')) {
        display.innerHTML = 'Please make one calculation at a time'
    } else {
        currFormula += "-"
        formula.innerHTML = currFormula
    }
})

divide.addEventListener('click', () => {
    if (currFormula.includes('+') || currFormula.includes('-') || currFormula.includes('/') || currFormula.includes('*')) {
        display.innerHTML = 'Please make one calculation at a time'
    } else {
        currFormula += "/"
        formula.innerHTML = currFormula
    }
})

multiply.addEventListener('click', () => {
    if (currFormula.includes('+') || currFormula.includes('-') || currFormula.includes('/') || currFormula.includes('*')) {
        display.innerHTML = 'Please make one calculation at a time'
    } else {
        currFormula += "*"
        formula.innerHTML = currFormula
    }
})

comma.addEventListener('click', () => {
    currFormula += "."
    formula.innerHTML = currFormula
})

equal.addEventListener('click', () => {
    formula.innerHTML = currFormula
    display.innerHTML = calculation(currFormula)
})

function calculation(currFormula) {
    let newFormula = []
    if (currFormula.includes('*')) {
        newFormula = currFormula.split("*")
        return +newFormula[0] * +newFormula[1]
    } else if (currFormula.includes('/')) {
        newFormula = currFormula.split("/")
        if (newFormula[1] == 0) {
            return 'Please don\'t divide by zero!'
        } else {
            return parseFloat(newFormula[0]) / parseFloat(newFormula[1])
        }
    } else if (currFormula.includes('+')) {
        newFormula = currFormula.split("+")
        return +parseFloat(newFormula[0]) + parseFloat(newFormula[1])
    } else if (currFormula.includes('-')) {
        newFormula = currFormula.split("-")
        return +parseFloat(newFormula[0]) - parseFloat(newFormula[1])
    }

}