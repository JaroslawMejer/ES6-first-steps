// FIRST TASK
const firstVar = 'Hello'
const secondVar = 'World'
const connected = `${firstVar} ${secondVar}`
console.log(connected)

// SECOND TASK
const multiply = (x = 1, y = 1) => console.log(x*y)

multiply(5, 4)
multiply(4)

// THIRD TASK

const average = (...args) => {
	let sum = 0
	args.forEach(arg => sum = sum + arg)
	console.log(sum/args.length)
}

average(5, 5)

// FOURTH TASK

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]

average(...grades)

// FIFTH TASK

const weirdObject = [1, 4, 'Iwona', false, 'Nowak']

const [ , , firstName, , lastName] = weirdObject

console.log(firstName)
console.log(lastName)