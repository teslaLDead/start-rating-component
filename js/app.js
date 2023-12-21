
import {Star} from "./StarComponent.js";
const data = {
  books:[
    {
      id: 1,
      name: "title",
      rated: 0,

    },
    {
      id: 2,
      name: 't',
      rated: 3,
    },
    {
      id:3,
      name: 't',
      rated: 5,
    }
  ]
}
const booksParentContainer = document.getElementById('book-container');
data.books.forEach(book=>{
 const bookContainer = document.createElement('div');
 Star(book.rated,bookContainer)
  booksParentContainer.appendChild(bookContainer);

})


