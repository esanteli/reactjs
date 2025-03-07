import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Catalog from "./components/Catalog";
import ProductDetail from "./components/ProductDetail";
import ItemListContainer from "./components/ItemListContainer";
import About from "./components/About";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Welcome to Like10's Store!" />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<h1>Servicios</h1>} />
        <Route path="/products" element={<h1>Productos</h1>} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:categoryId" element={<Catalog />} />
        <Route path="/product/:itemId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;