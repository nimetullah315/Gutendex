import { useParams,useNavigate } from "react-router-dom";
import { useBookDetails } from "../hooks/useBookQuery";
import useFavourateContext from "../hooks/useFavourateContext";

const BookDetails = () => {
  const { id } = useParams();
const navigate = useNavigate();
  const {
    data: book,
    isLoading,
    error,
  } = useBookDetails(id);

  const {setFavourate} = useFavourateContext();

 const addToFavourate = (fav) => {
  setFavourate((prev) => {
    if (
      prev.some(
        (book) => book.id === fav.id
      )
    ) {
      return prev;
    }

    return [...prev, fav];
  });
};

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Error</h1>;

  return (
    <div className="bookDetails">
      <img
        src={book.formats["image/jpeg"]} alt={book.title} />
        <h2>{book.title}</h2>

      <h3>
        {book.authors
          .map((author) => author.name)
          .join(", ")}
      </h3>
      <h4>
  Categories: {
    book.bookshelves
      .map((cat) =>
        cat.replace("Browsing: ", "").replace("Category: ", "")
      )
      .join(", ")
  }
</h4>
      <h4>Languange: {book.languages.map((lan) => lan.toUpperCase())
          .join(", ")}</h4>
      <h4 className=""><a href={book.formats["application/rdf+xml"]}>Digital Book</a></h4>
      <h4>Downloaded: {book.download_count}</h4>
      <div className="controlBtns">
        
      <button className="linkButton"  onClick={()=> addToFavourate(book)}>Add to favourate</button>
      <button className="linkButton" onClick={() => navigate(-1)}>
Back
</button>
      </div>
    </div>
  );
};

export default BookDetails;