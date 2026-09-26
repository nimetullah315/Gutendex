import { useState } from "react";
import {
  useBookByCategory,
  useBooks,
  useSearchedBooks,
} from "../hooks/useBookQuery";
import { useOutletContext, useNavigate } from "react-router-dom";
import Category from "../components/Category";

const Home = () => {
  const [category, setCategory] = useState("all");

  const navigate = useNavigate();

  const { searchTerm, pageUrl, setPageUrl } =
    useOutletContext();

  const { data: allBooks, isLoading } =
    useBooks(pageUrl);

  const { data: searchedBooks } =
    useSearchedBooks(searchTerm);

  const {
    data: booksByCategory,
    isFetching,
  } = useBookByCategory(category);

  let booksData;
  let books;

  if (searchTerm) {
    booksData = searchedBooks;
    books = searchedBooks?.results ?? [];
  } else if (category !== "all") {
    booksData = booksByCategory;
    books = booksByCategory?.results ?? [];
  } else {
    booksData = allBooks;
    books = allBooks?.results ?? [];
  }

  const toBookDetails = (id) => {
    navigate(`/book/${id}`);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="home">
      <Category 
        category={category}
        setCategory={setCategory}
      />

      {isFetching && (
        <p>Loading category books...</p>
      )}

      {books.map((book) => (
        <h4 className="bookTitle" 
          key={book.id}
          onClick={() => toBookDetails(book.id)}
          style={{ cursor: "pointer" }}
        >
          {book.title}
        </h4>
      ))}

      {!searchTerm && (
        <div className="navButton">
          <button className="linkButton"
            disabled={!booksData?.previous}
            onClick={() =>
              setPageUrl(booksData.previous)
            }
          >
            Previous
          </button>

          <button className="linkButton"
            disabled={!booksData?.next}
            onClick={() =>
              setPageUrl(booksData.next)
            }
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;