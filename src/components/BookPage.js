import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookPage = () => {
  const { pageId } = useParams();
  const [bookData, setBookData] = useState();

  useEffect(() => {
    fetchBookData();
  }, []);

  const fetchBookData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API}books/${pageId}`);
    const data = await response.json();
    setBookData(data);
    console.log(data);
  };

  return (
    <div>
      <div>{pageId}</div>
    </div>
  );
};

export default BookPage;
