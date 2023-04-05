import React from "react";
import { useLoaderData } from "react-router-dom";
import { Book } from "../components";
const Books = () => {
  const { books } = useLoaderData();

  return (
    <div className="my-container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {books.map((book) => (
          <Book key={book.isbn13} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
