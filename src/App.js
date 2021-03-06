import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Categories from "./Pages/Categories";
import Categoriespage from "./Pages/Categoriespage";
import ProductItemDetails from "./Pages/ProductItemDetails";
import ProductListing from "./Pages/ProductListing";
import Splash from "./Pages/Splash";

function App() {
  return (
    <div className="d-none">
      {/* <Splash /> */}
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/girls" element={<Categoriespage />} />
        <Route path="/mens" element={<Categoriespage />} />
        <Route path="/kids" element={<Categoriespage />} />
        <Route path="/home" element={<Categoriespage />} />
        <Route path="/luxe" element={<Categoriespage />} />
        <Route path="/tech" element={<Categoriespage />} />
        <Route path="/product-lists" element={<ProductListing />} />
        <Route path="/product-item-details" element={<ProductItemDetails />} />
      </Routes>
    </div>
  );
}

export default App;
