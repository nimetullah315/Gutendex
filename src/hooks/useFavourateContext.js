import { useContext } from "react";
import { FavourateContext } from "../context/FavourateContext";
const useFavourateContext = () => {
return useContext(FavourateContext);
};
export default useFavourateContext;