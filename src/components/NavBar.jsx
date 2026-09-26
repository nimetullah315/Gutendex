import { useLocation, Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = ({ searchTerm, setSearchTerm, setPageUrl }) => {
  const location = useLocation();
  const isHiddenPage =
    location.pathname.startsWith("/book/") ||
    location.pathname.startsWith("/favourates");

  return (
    <nav>
      {!isHiddenPage && (
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setPageUrl={setPageUrl}
        />
      )}
      <Link to="/" className="linkButton">
        Home
      </Link>
      <Link to="/favourates" className="linkButton" className="heart">
        💙
      </Link>
    </nav>
  );
};

export default NavBar;
