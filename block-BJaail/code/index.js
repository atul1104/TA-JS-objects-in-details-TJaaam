let form = document.querySelector(".form");
let bookListRoot = document.querySelector(".book_list");

const nameElm = form.elements.bookName;
const authorElm = form.elements.bookAuthor;
const imageElm = form.elements.bookImage;

class BookList {
  constructor(books = []) {
    this.books = books;
  }
  addBook(name, author, image) {
    let book = new Book(name, author, image);
    this.books.push(book);
    this.createUI();
  }
  createUI() {
    bookListRoot.innerHTML = "";
    this.books.forEach((book) => {
      let li = document.createElement("li");
      let img = document.createElement("img");
      img.src = book.image;
      let h2 = document.createElement("h2");
      h2.innerText = book.name;
      let p = document.createElement("p");
      p.innerText = book.author;
      let button = document.createElement("button");
      button.innerText = book.isRead ? "Completed!" : "Mark As Read!";
      button.classList.add("form_btn");
      button.addEventListener("click", () => {
        book.toggleIsRead();
        this.createUI();
      });
      li.append(img, h2, p, button);
      bookListRoot.append(li);
    });
  }
}
let library = new BookList();

class Book {
  constructor(name, author, image) {
    this.name = name;
    this.author = author;
    this.image = image;
    this.isRead = "false";
  }
  toggleIsRead() {
    this.isRead = !this.isRead;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const name = nameElm.value;
  const author = authorElm.value;
  const image = imageElm.value;
  nameElm.value = "";
  authorElm.value = "";
  imageElm.value = "";
  library.addBook(name, author, image);
}

form.addEventListener("submit", handleSubmit);
