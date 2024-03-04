import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./Components/NavBar/NavBar";
import Filtrer from "./Components/Filtrer/Filtrer";

function App() {
  const [rating, setRating] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <NavBar
        rating={rating}
        setRating={setRating}
        setSearchInput={setSearchInput}
      />
      <Filtrer rating={rating} searchInput={searchInput} />
    </>
  );
}
export default App;
