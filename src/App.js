import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Categories from "./Pages/Categories";
import Categoriespage from "./Pages/Categoriespage";
import ProductListing from "./Pages/ProductListing";

function App() {
  return (
    <div className="d-none">
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/girls" element={<Categoriespage />} />
        <Route path="/product-lists" element={<ProductListing />} />
      </Routes>
    </div>
  );
}

export default App;
