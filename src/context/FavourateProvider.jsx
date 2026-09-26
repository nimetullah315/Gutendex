import { useEffect, useState } from "react";
import { FavourateContext } from "./FavourateContext";

const FavourateProvider = ({ children }) => {
  const [favourate, setFavourate] = useState(() => {
    const stored = localStorage.getItem("favourateBooks");

    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "favourateBooks",
      JSON.stringify(favourate)
    );
  }, [favourate]);

  const removeFavourate = (id) => {
    setFavourate((prev) =>
      prev.filter((book) => book.id !== id)
    );
  };

  return (
    <FavourateContext.Provider
      value={{
        favourate,
        setFavourate,
        removeFavourate,
      }}
    >
      {children}
    </FavourateContext.Provider>
  );
};

export default FavourateProvider;