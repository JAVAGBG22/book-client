import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";

function App() {
  /*   const [books, setBooks] = useState();
  const [authors, setAuthors] = useState();
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const fetchBooks = async () => {
    const response = await fetch(`${process.env.REACT_APP_API}books`);
    const data = await response.json();
    setBooks(data);
    console.log(data);
  };

  const fetchAuthors = async () => {
    const response = await fetch(`${process.env.REACT_APP_API}authors`);
    const data = await response.json();
    setAuthors(data);
    console.log(data);
  };

  const addPost = async () => {
    const newPost = {
      title: title,
      content: content,
    };
    await fetch(`${process.env.REACT_APP_API}post`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newPost),
    });
    setTitle("");
    setContent("");
    alert("Post created!");
    //fetchPosts();
    setShowCreatePost(false);
  };

  useEffect(() => {
    //fetchPosts();
  }, []); */

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* <Route path="/book/:pageId" element={<AuctionPage />}></Route> */}
      </Routes>
    </BrowserRouter>
  ); /* !showCreatePost ? (
    <div className="posts-container">
      <div className="top-row">
        <h1>My Posts</h1>
        <button onClick={() => setShowCreatePost(true)}>Create new post</button>
      </div>
      {books?.map((book) => (
        <div key={book._id} className="post-container">
          <h2>{book.title}</h2>
          <div className="date-info">
            <span>{book.postedBy}</span>
            <span>
              {new Date(book.createdAt).toLocaleString().slice(0, -3)}
            </span>
          </div>
          <p>{book.content}</p>
        </div>
      ))}
    </div>
  ) : (
    <div className="create-post-container">
      <div className="top-row">
        <h1>Create a new post</h1>
        <button onClick={() => setShowCreatePost(false)} className="close-btn">
          x
        </button>
      </div>
      <label>
        <h3>Title</h3>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        <h3>Content</h3>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </label>
      <button onClick={() => addPost()}>Add post to database</button>
    </div>
  ); */
}

export default App;
