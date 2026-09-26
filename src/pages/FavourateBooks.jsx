import useFavourateContext from "../hooks/useFavourateContext";

const FavourateBooks = () => {
  const { favourate, removeFavourate } =
    useFavourateContext();

  if (!favourate.length) {
    return <p>There is no favourite list.</p>;
  }

  return (
    <div className="favouriteBooks">
      {favourate.map((book) => (
        <div
          key={book.id}
          className="favouriteCard"
        >
          <h3>{book.title}</h3>

          <button
            onClick={() =>
              removeFavourate(book.id)
            }
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default FavourateBooks;
