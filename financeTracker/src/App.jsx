import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import About from './pages/About';
import Home from './pages/Home';
import PageNoFound from './pages/PageNoFound';
import ProductDetail from './pages/ProductDetail';


function App() {
  return <BrowserRouter>
  
    <Nav/>
    <Routes>
      <Route path = "/" element            = {<Home/>} />
      <Route path = "/about" element       = {<About/>} />
      <Route path = "/product/:id" element = {<ProductDetail/>} />
      <Route path = "*" element            = {<PageNoFound/>} />

    </Routes>
    
  </BrowserRouter>;
}

export default App;
