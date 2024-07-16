//print 1 to 10 number 
for (let i = 1 ; i<11 ; i++)
{
    console.log(i)
}

// table of 5 
for (let i =1 ; i<=10 ; i++)
{
    console.log(5*i)
}

//sum of number  from 1 to 10
let sum = 0
let i = 0 
while(i < 11)
{
    sum = sum +i
    i++
}
console.log(sum)

// number from 10 to 1
let j = 10 
while(j > 0)
{
   console.log("number from " , j)
   j--
}

// number from 1 to 5
let Num = 1
do {
    console.log("number from 1-5" , Num)
    Num++
} while (Num <6);

//factorial 
let s = 1
let fact = 5
let result = 1

do {
    result = result * s
    s++

} while (s <= fact);

console.log(result)


//pattern print 
 for (let i =1 ; i<=5 ; i++)
 {  
    let row =""

     for (let j =1 ; j<=i ; j++)
     {
         row += "*" 
    }

    console.log(row)
 }

//loop control 
for (let i = 1 ; i<=10 ; i++)
{
 
   if( i === 5) 
    {   
        continue
    }
    console.log(i)
    
}

for (let i = 1 ; i<=10 ; i++)
    {
     
       if( i === 7) 
        {   
            break
        }
        console.log(i)
    }
    
    