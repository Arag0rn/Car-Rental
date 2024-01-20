import {  Routes, Route} from "react-router-dom";
import { HomePage } from "Pages/HomePage";
import { CatalogPage } from "Pages/CatalogPage";
import { FavoritesPage } from "Pages/FavoritesPage";
import { Layout } from "./Layout";

export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index path="/home" element={<HomePage/>} />
      <Route path="/catalog" element={<CatalogPage/>} />
      <Route path="/favorites" element={<FavoritesPage/>} />
  </Route>
  </Routes>
  )
};
