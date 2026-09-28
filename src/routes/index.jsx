import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import BookDetails from "../pages/BookDetails";
import FavourateBooks from "../pages/FavourateBooks";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
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
          path: "favourates",
          element: <FavourateBooks />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

export { router };