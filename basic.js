// sum of number 
// function sumofnum (n) 
// {   let sum = 0 
//     for
//     return
// }
//find miss num
function missnum (num) 
{
    for (i=0 ; i<= num.length ; i++)
        { 
           
            if(i !== num[i])
            {   
            
                return i
            }
           
        }
        
         
}
const y = missnum([0,1,2,3,4,5,6,8])

console.log(y)

