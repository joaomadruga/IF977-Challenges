import fetch from 'node-fetch';

class Book {
    constructor(title, description, author){
        this.title = title
        this.description = description
        this.author = author
    }
    addId(id){
        this.id = id
    }
}

class Library {
    constructor(){
        this.books = []
    }

    async addBook(bookInfo){
      await fetch('https://officeapi.dev/api/quotes/random')
      .then(response => response.json())
      .then(response => bookInfo.addId(response.data.content))
      this.books.push(bookInfo);
    }
  
    getBooks() {
      return this.books
    }
    
    removeBookById(id){
      let deletedBook;
      this.books = this.books.filter((book, index) => {
        if (book.id != id){
            return book
        }else{
            deletedBook = book
        }
      })
      return deletedBook
    }
  
    getBookById(id){
        let findedBook = this.books.filter((book) => {
            if (book.id === id){
                return book;
            }
            })
        return findedBook;
    }
  
    updateBookById(id, info){
    let updatedBook = this.books.filter((book) => {
        if (book.id === id){
            if (info.title) book.title = info.title
            if (info.description) book.description = info.description
            if (info.author) book.author = info.author
            return book;
        }
        })
      return updatedBook
    }
    
  }
  
  
  
let lib = new Library()
let newBook = new Book('teste', 'teste', 'teste')
await lib.addBook(newBook)
let newestBook = new Book('teste2', 'teste2', 'teste2')
await lib.addBook(newestBook)