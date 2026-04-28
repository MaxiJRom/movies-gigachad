import { Outlet, Link } from "react-router-dom";
import SearchBar from "../features/search/SearchBar";

export default function Layout() {
  return (
    <>
      <header>
        <Link to={"/"}>
          <h1>MOVIES GIGACHAD</h1>
        </Link>
        <SearchBar />
      </header>
      <Outlet />
    </>
  );
}
