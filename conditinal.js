//check postive , negative or zero number 
let num = -6
if(num > 0)
{
    console.log('number is positive')
}
else if(num < 0)
{
    console.log('number is negative')
}
else if (num === 0)
{
  console.log('number is zero')
}

//person is voter or not
let vote = 20 
if(vote > 0 && vote >18)
{
    console.log("person is eligible to vote")
}

//largest three number 
let num1 = 1233
let num2 = 4
let num3 = 124

if(num1 > num2 && num1 > num3 )
{
   console.log('num1 is greatest')
}
else if(num2 > num1 && num2 > num3)
{
    console.log('num2 is greatest')
}
else{
    console.log('num3 is greatest')
}
//even or odd 
let evenorodd = 7 
const numeven = evenorodd % 2==0 ? 'even' : 'odd'
console.log(numeven)

//check leap year 
let year = 2024
if (year % 400 === 0) {
    console.log(year + ' is a leap year');
} else if (year % 100 === 0) {
    console.log(year + ' is not a leap year');
} else if (year % 4 === 0) {
    console.log(year + ' is a leap year');
} else {
    console.log(year + ' is not a leap year');
}
    

// find day
let day = 3
switch(day)
{
    case 1:
        console.log('day is monday')
        break;
    case 2:
        console.log('day is tuesday')
        break;  
    case 3:
        console.log('day is wensday')
        break; 
    case 4:
         console.log('day is thursday')
        break; 
    case 5:
        console.log('day is friday')
        break;
    case 6:
        console.log('day is saturday')
        break;
    case 6:
        console.log('day is sunday')
        break;    
}

//find grade
let score = 70
switch(score)
{
    case 90:
        console.log('grade is A')
        break;
    case 80:
        console.log('grade is B')
        break;  
    case 70:
        console.log('grade is C')
        break; 
    case 60:
        console.log('grade is D')
        break; 
    case 40:
        console.log('grade is fail')
        break;
    
}