//sum 
const sum = function addnum (num1 , num2)
{
   return num1 + num2
}

console.log(sum(4,5))

//substract
const substarct = function addnum (num1 , num2)
{
   return num1 - num2
}

console.log(substarct(4,5))

//multiply
const multiply = function addnum (num1 , num2)
{
   return num1 * num2
}

console.log(multiply(4,5))


const divide = function addnum (num1 , num2)
{
   return num1 / num2
}

console.log(divide(20,5))


const showreaminder = function addnum (num1 , num2)
{
   return num1 % num2
}

console.log(divide(21,5))


//assignment
let sumnum = 4 
console.log(sumnum += 4)

let num3 = 4 
console.log(num3 -= 2)

//logical 
let num = 10
if (num > 2 && num %2===0 )
{
    console.log('number is even and postive')
}

if(num >=   5 || num <= 10)
{
    console.log('number is between 5 and 10 ')
}

let islogin = false
if(!islogin)
{
  console.log('! is ' , num)
}

//equality 
let team2 ="2"
let team1 = "2"
if( team1 === team2) 
{
    console.log('true')
}



//postive or negative
let num5 = -4 
const ispositive = num5 > 1 ? 'positive' : 'negative' 
console.log(ispositive)

