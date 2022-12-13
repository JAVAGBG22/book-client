import { useEffect, useState } from "react";
import BookContainer from "./BookContainer";

const Landing = () => {
  const [books, setBooks] = useState();
  const [authors, setAuthors] = useState();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await fetch(`${process.env.REACT_APP_API}books/all`);
    const data = await response.json();
    setBooks(data);
    console.log(data);
  };
  return (
    <div>
      {books?.map((book) => {
        return (
          <BookContainer
            key={book}
            id={book._id}
            title={book.title}
            author={book.author}
            bookCoverUrl={book.bookCoverUrl}
            priceExVat={book.priceExVat}
          />
        );
      })}
    </div>
  );
};

export default Landing;
