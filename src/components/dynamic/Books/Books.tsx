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
  const [books, setBooks] = useState<BookType[]>([]);

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
  }, []);

  return (
    <div className="books text-center">
      <h3 className="my-10 text-4xl font-bold">Total Books: {books.length}</h3>
      <div className="grid grid-cols-3 gap-y-10">
        {books.map((book, idx) => (
          <div key={idx} className="w-96 glass m-auto rounded-lg">
            <div className="card-body">
              <h2 className="text-2xl font-bold">{book.book_name}</h2>
              <p>
                <span className="font-bold text-lg">Category : </span>
                {book.book_type}
              </p>
              <div className="author">
                <p>
                  <span className="font-bold">Author : </span>
                  {book.author_info.name}
                </p>
                <p className="text-xs">
                  <span className="font-bold">Born in : </span>
                  {book.author_info.birth_year},{" "}
                  <span className="font-bold">Gender : </span>
                  {book.author_info.gender}
                </p>
              </div>
              <p className="mt-3">
                <span className="font-bold">Published On : </span>
                {book.published_on}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
