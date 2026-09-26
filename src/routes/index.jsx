import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import BookDetails from "../pages/BookDetails";
import FavourateBooks from "../pages/FavourateBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "book/:id",
        element: <BookDetails />,
      },
      {
        path:"/favourates",
        element:<FavourateBooks />
      }
    ],
  },
]);

export { router };
