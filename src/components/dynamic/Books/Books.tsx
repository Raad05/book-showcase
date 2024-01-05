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
      } else {
        console.log("Failed to load books");
      }
    } catch (error) {
      console.error("Failed to fetch books", error);
    }
  };

  useEffect(() => {
    getBooks();
  });

  return (
    <div className="books">
      <button>Books</button>
    </div>
  );
};

export default Books;
