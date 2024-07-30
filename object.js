//creation and acess 
const book = {
    //properties
    title : 'physics' ,
    author : 'NTA',
    year : 2004,

    library :{
      names : 'science',
      books :[
        {
            title : 'chem' ,
            author : 'DCP',
            year : 2002,
        },
        {
            title : '' ,
            author : 'MSB',
            year : 2001,
        },
      ]
    },

    //methods
    bookname (title , author ) 
    {
        return `title of book is ${title} and author of book is ${author}`
    },

    updateyear (year) 
    {
       this.year = this.year + 1
       return this.year
    }
    
}

console.log(book.author)
console.log(book.title)
console.log(book.year)
console.log(book.bookname('c ' , 'max'))
console.log(book.updateyear())
console.log(book.library)
console.log(book.library.names)

let arrayodbook = book.library.books
//looping throught it 
for(let prop in arrayodbook)
{
    console.log(prop["title"])
}


//itrate on object 

//uses object keys and object properties 

