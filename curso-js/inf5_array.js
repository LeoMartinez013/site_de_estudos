let num = [1,2,3]

console.log('===========')

console.log(`Nosso vetor é o ${num}`)

console.log('===========')

console.log(num)

console.log('===========')

num[3] = 4 // num.push(4)
console.log(`Nosso vetor agr é o ${num}`)
 
console.log('===========')

/*
for(let pos=0; pos < num.length; pos++) {
    console.log(`valor num num[${pos}] é ${num[pos]}`)
}
*/
for(let pos in num) {
    console.log(num[pos])
}

console.log('===========')

console.log(num.indexOf(4))