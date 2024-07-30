//create array 
let num =[1,2,3,4,5] 
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])

//acess first and last element 
console.log(num[0]) // first 
console.log(num[num.length -1 ]) //last 

// iteration on array 
let colors = ['red' , 'blue' ,'green' ,'black' , 'pink']
for(let i =0 ; i< colors.length ; i++)
{
    console.log(colors[i])
}
//using foreach
colors.forEach((i)=> console.log(i))

//array methods 
colors.pop()
console.log(colors)
colors.push('orange')
console.log(colors)
colors.shift()
console.log(colors)
colors.unshift('grey')
console.log(colors)

//map ,filter , reduce 
let Num = [1,2,3,4,5]
const doublednum = Num.map((item) => item*2) 
console.log(doublednum) 

const evennumber = Num.filter((item)=> item %2 === 0)
console.log(evennumber)

const sumofall = Num.reduce((acc ,item) => acc + item , 0)
console.log(sumofall)

// 2-d array 
const rows = 4;
const cols = 2;
const array2D = [];

for (let i = 0; i < rows; i++) {
  array2D[i] = [];
  
  for (let j = 0; j < cols; j++) {
    array2D[i][j] = i * j; // Assign product of row and column indices
  }
}

console.log(array2D[2][0]);

//function to check to array is equal or not 


let figure = [1,2,3,4]
let figure2 = [1,23,3,4]

function twoarrayequal (figure2 ,figure ) 
{
   if(figure.length === figure2.length)
   {
      for(let i=0; i<= figure.length ; i++) 
      {
         if(figure[i] === figure2 [i])
         {
           
         }

         else if(figure[i] !== figure2 [i])
            {
            console.log('both array are not equal')
          }
        
      }
     
   }

   else {
     console.log( 'length is not same')
   }
}
twoarrayequal(figure2 ,figure)


// INSERT element in array 
let arr = [12,45,67,788,89]
let position = 5
let element = 999

function isinsert(arr , pos , ele ) 
{
    for(let i = arr.length ;  i>=pos ; i-- )
    {
      
       if(i === position)
       {
           arr[i] = ele
       }
       else{
           arr[i] = arr[i-1]
       }
       
    }
    
    console.log(arr)
}


isinsert(arr , position ,element )


//delete element in array
let arr1= [12,45,67,788,89]
let position1 = 3


function isinsert(arr , pos) 
{
    for(let i = pos ; i < arr.length ; i++ )
    {
      
       if(i >= pos)
       {
           arr[i] = arr [i+1]
       }             
       
    }
    
    arr.length = arr.length-1 
    
    console.log(arr)
}

isinsert(arr1 , position1 )

//merge two array
let pet1 =['cat' , 'cow' ,'bull']
let pet2 = ['dog' ,'rabbit' ,'hex' , 'todo']
let allpet = []

function mergearr (pet1 , pet2)
{
   for(let i = 0 ; i < pet1.length ; i++)
   {
      allpet[i] = pet1[i]
   }

   for(let i = 0 ; i< pet2.length ; i++)
   {
      allpet[pet1.length + i ] = pet2[i]
   }

  console.log(allpet)
   
}

mergearr(pet1 , pet2)