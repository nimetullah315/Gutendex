import { Outlet } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/Navbar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageUrl, setPageUrl] = useState(
    "https://gutendex.com/books"
  );

  return (
    <>
      <NavBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setPageUrl={setPageUrl}
      />

      <Outlet
        context={{
          searchTerm,
          pageUrl,
          setPageUrl,
        }}
      />
    </>
  );
}

export default App;