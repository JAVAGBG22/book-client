import { useEffect, useState } from "react";
import BookContainer from "./BookContainer";

const Landing = () => {
  const [books, setBooks] = useState();
  const [authors, setAuthors] = useState();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await fetch(`${process.env.REACT_APP_API}all`);
    const data = await response.json();
    setBooks(data);
    console.log(data);
  };
  return (
    <div>
      <div>Landing</div>
      <BookContainer />
    </div>
  );
};

export default Landing;
