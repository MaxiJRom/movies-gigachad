import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { store } from "./app/store";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import MovieById from "./pages/MovieById";

import Search from "./pages/Search";

import { Provider } from "react-redux";
import MovieBySearchQuery from "./pages/MovieBySearchQuery";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":id" element={<MovieById />} />

        <Route path="search" element={<Search />} />
        <Route path="search/:id" element={<MovieBySearchQuery />}></Route>
      </Route>,
    ),
  );

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
