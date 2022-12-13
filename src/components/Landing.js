import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookContainer from "./BookContainer";

const Landing = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await fetch(`${process.env.REACT_APP_API}books/all`);
    const data = await response.json();
    setBooks(data);
  };
  return (
    <div>
      {books?.map((book) => {
        return (
          <div key={book._id}>
            <BookContainer
              id={book._id}
              title={book.title}
              author={book.author.name}
              bookCoverUrl={book.bookCoverUrl}
              priceExVat={book.priceExVat}
            />
            <Link to={`/${book._id}`}>
              <button>Read more</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Landing;
