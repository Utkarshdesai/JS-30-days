//number is even or odd
function iseven (num) 
{
    if(num % 2 === 0)
    {
        console.log(' number is Even ')
    }
    else{
        console.log('number is odd')
    }
}

iseven(3) 

//calcute square of number 
function issquare (num) 
{
   console.log(num*num)
}

issquare(4)

//max of 2 number
const maxnumber = function (num1 ,num2) 
{
   if(num1 > num2)
   {
    console.log('num1 is grater than num1')
   }
   else{
    console.log('num2 is greter than num1')
   }
}

maxnumber(2,3)

//concate two string 
const concatestr = function (str1 ,str2) 
{
    return str1 +""+ str2
}

console.log(concatestr('hello' , 'world'))

//sum of two num
const sumofnum = (num3, num4) => {
   return num3+num4
}

console.log(sumofnum(5,67))

//check certain character 
const checkcharacter  = (str) => {
    if(str.includes('u')) return true
    else return false
}

console.log(checkcharacter('hello'))

//product of two 
function productoftwo (num4, num5=8) 
{
   return num4*num5
}

console.log(productoftwo(6))

function greet (name , age = 34) 
{
    return `hello ${name} your age is ${age}`
}

console.log(greet('jack'))

//higher order fucntion 
function x(callback , y1) 
{  
   callback()

}

x(function y()
{
  console.log('function is y')
} , 7)

//higher order function 2 
function a ( b , c , value)

{ 
    
    const res1 = c(value)
    console.log(res1)
    const res2 = b(value)
    console.log(res2)
}

a(function b(x)
{
    return x +'b'
}
,
function c (x) 
{
    return x +'c'
},
 5
)

















