
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Page not found.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default ErrorPage;