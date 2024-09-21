import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail.jsx";
import Products from "./pages/Products.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
