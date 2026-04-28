import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByQuery } from "./searchSlice";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(searchByQuery(searchQuery));

    navigate(`/search/?query=${searchQuery}`);

    setSearchQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="search"
        name="searchInput"
        id="searchInput"
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        className="search-input"
      />
      <input type="submit" value="Search" />
    </form>
  );
}
