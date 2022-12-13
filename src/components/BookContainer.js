import { Link } from "react-router-dom";
import "../styles/BookContainer.css";

const BookContainer = ({ bookCoverUrl, title, author, priceExVat }) => {
  return (
    <div className="book-container">
      <img src={`${bookCoverUrl}`} />
      <div className="book-info">
        <span>{title}</span>
        <span>by {author}</span>
        <span>
          ${priceExVat} <span>excluding VAT</span>
        </span>
      </div>
    </div>
  );
};

export default BookContainer;
