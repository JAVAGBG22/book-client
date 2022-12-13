const BookContainer = ({
  imgUrl = "url",
  title = "Title",
  author = "Author",
  price = "500",
}) => {
  return (
    <div className="book-container">
      <img />
      <div>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default BookContainer;
