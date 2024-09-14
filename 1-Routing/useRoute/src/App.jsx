import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";

function App() {
	return (
		<BrowserRouter>
			<Navbar />

			<Routes>
				<Route path = "/" element            = {<Home />} />
				<Route path = "/about" element       = {<About />} />
				<Route path = "/product/:id" element = {<ProductDetail />} />
				<Route path = "*" element            = {<NotFound />} />
				<Route path = "/phone" element       = {<h1>i am phone !</h1>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
