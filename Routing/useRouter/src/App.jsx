
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
		<BrowserRouter>
			<Navbar />

			<Routes>
				<Route path = "/" element      = {<Home />} />
				<Route path = "/About" element = {<About />} />
				<Route path = "*" element      = {<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}


export default App;
