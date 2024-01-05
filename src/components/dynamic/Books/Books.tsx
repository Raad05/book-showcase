import axios from "axios";
import { useEffect, useState } from "react";

interface BookType {
  book_type: string;
  book_name: string;
  author_info: { name: string; birth_year: number; gender: string };
  published_on: number;
  comments: string[];
}

const Books = () => {
  const [books, setBooks] = useState<null | BookType[]>(null);

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
      {books?.map((book, idx) => (
        <p key={idx}>{book.book_name}</p>
      ))}
    </div>
  );
};

export default Books;
