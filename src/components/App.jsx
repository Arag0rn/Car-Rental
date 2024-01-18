import {  Routes, Route} from "react-router-dom";
import { Home } from "./Home/Home";
import { Catalog } from "./Catalog/Catalog";
import { Favorites } from "./Favorites/Favorites";

export const App = () => {

  return (
    <Routes>
      <Route index path="/" element={<Home/>} />
      <Route path="/catalog" element={<Catalog/>} />
      <Route path="/favorites" element={<Favorites/>} />
  
  </Routes>
  )
};
