import "../styles/BookContainer.css";
import { Link } from "react-router-dom";

const BookContainer = ({ id, bookCoverUrl, title, author, priceExVat }) => {
  return (
    <div className="book-container">
      <img src={`${bookCoverUrl}`} />
      <div className="book-info">
        <span>{title}</span>
        <span>by {author}</span>
        <span>
          ${priceExVat} <span>excluding VAT</span>
        </span>
        <Link to={`/books/${id}`}>
          <button>Read more</button>
        </Link>
      </div>
    </div>
  );
};

export default BookContainer;
