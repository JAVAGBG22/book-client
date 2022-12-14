import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/BookPage.css";

const BookPage = () => {
  const { pageId } = useParams();
  const [bookData, setBookData] = useState({});

  useEffect(() => {
    fetchBookData();
  }, []);

  const fetchBookData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API}books/${pageId}`);
    const data = await response.json();
    setBookData(data);
  };

  return (
    <div className="book-page-container">
      <img src={`${bookData.bookCoverUrl}`} />
      <div className="book-page-info">
        <h2>{bookData.title}</h2>
        <h3>Author: {bookData.author?.name}</h3>
        {bookData.coAuthor != null ? (
          <h3>Co-author: {bookData.coAuthor?.name}</h3>
        ) : (
          ""
        )}
        <div>ISBN: {bookData.isbn}</div>
        <div>{bookData.pages} pages</div>
        <div>
          <b>Description:</b> {bookData.description}
        </div>
      </div>
    </div>
  );
};

export default BookPage;
