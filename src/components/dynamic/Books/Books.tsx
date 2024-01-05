import axios from "axios";
import { useEffect, useState } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        const res = await axios.get("http://localhost:5000/get_books/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBooks(res.data);
      }
    } catch (error) {
      console.error("Failed to fetch books", error);
    }
  };

  useEffect(() => {
    getBooks();
    // console.log(books);
  });

  return (
    <div className="books">
      {books.map((book, idx) => (
        <p key={idx}>{book.book_name}</p>
      ))}
    </div>
  );
};

export default Books;
