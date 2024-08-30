
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/home";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
