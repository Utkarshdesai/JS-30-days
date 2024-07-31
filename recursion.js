// a function is called itself similar to iterative apporch 
//  most imp it should have base condition to stop otherwise it will call infinte 

// * print 10 number * 

function printnum (n) 
{
//   console.log(n)

   //base condition
   if(n===10)
   {
     return
   }

   // recursive call
   printnum(n+1)
}

printnum(1)

//factorial 
let factorial = 1
function fact (n) 
{  
    
   //calculate factorial
    factorial = factorial * n
    console.log(factorial)
   if(n===1)
   {
     return 
   }

   fact(n-1)
}

fact(5)