import { useState } from "react";

const SearchBar = ({ setSearchTerm, setPageUrl }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    setSearchTerm(inputValue);
    setPageUrl("https://gutendex.com/books");
  };

  return (
    <div  className="searchBar">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />

      <button onClick={handleSearch} className="linkButton">Search</button>
    </div>
  );
};

export default SearchBar;
