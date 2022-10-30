const books = [
  { title: "Gatsby le magnifique", author: "F. Scott Fitzgerald" },
  { title: "A la recherche du temps,perdu", author: "Marcel Proust" },
  { title: "Orgueil & Préjugés", author: "Jane Austen" },
];
function addBook(theBook) {
  return new Promise((resolve, reject) => {
    // reject("Could not add book");
    setTimeout(() => {
      resolve(books.push(theBook));
      console.log("---New Book Added---");
    }, 2000);
  });
}

function listBooks() {
  console.log(books);
}

async function newBook() {
  listBooks();
  try {
    await addBook({
      // await is used to wait for the promise to resolve. not every function returns a promise so we can't use await on every function.
      title: "Le Petit Prince",
      author: "Antoine de Saint-Exupéry",
    });
    listBooks(); // doesn't even list the books if the promise is rejected. so it waits for the promise to resolve
  } catch (err) {
    // if the promise is rejected, the catch block is executed
    console.log(err);
  }
}

newBook();
