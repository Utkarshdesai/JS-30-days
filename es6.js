//template literal 
let brother  = 'max' 
let age = 56 
console.log(`the name ${brother} and age of ${age}`)

console.log(`This is a multi-line string. It spans multiple lines
without needing any special characters.`)

//destructre 
const colors = ['red' ,'blue' ,'pink' , 'green']
const[,x , y] = colors
console.log(x) 
console.log(y)

const book = {
    //properties
    title : 'physics' ,
    author : 'NTA',
    year : 2004, 
}

const {title , author , year:year1} = book

console.log(title)
console.log(author)
console.log(year1)

//spread and rest 
let num = [1,2,44]
const newnum =[...num  ,89 ,88]
console.log(newnum)

//rest
function sumup (...total)
{  
    const sum = total.reduce( (acc , item) => acc + item , 0 )

    console.log('sum of number' , sum)
}
const all = sumup(100 ,200 ,400 ,7000)


//defalt parameter
function defalut (a , b=1) 
{
   return a*b
}

console.log(defalut(10 ,4))


//enhanced object literal 
const firstName = 'Charlie';
const lastName = 'Brown';
const dynamicKey = 'age';

const person = {
  firstName,
  lastName,
  [dynamicKey]: 35,
  greet() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I am ${this[dynamicKey]} years old.`);
  }
};

console.log(person);
// Output: { firstName: 'Charlie', lastName: 'Brown', age: 35, greet: [Function: greet] }

person.greet();
// Output: Hello, my name is Charlie Brown and I am 35 years old.



