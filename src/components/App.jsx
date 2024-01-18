import {  Routes, Route} from "react-router-dom";
import { HomePage } from "Pages/HomePage";
import { CatalogPage } from "Pages/CatalogPage";
import { FavoritesPage } from "Pages/FavoritesPage";

export const App = () => {

  return (
    <Routes>
      <Route index path="/" element={<HomePage/>} />
      <Route path="/catalog" element={<CatalogPage/>} />
      <Route path="/favorites" element={<FavoritesPage/>} />
  
  </Routes>
  )
};
