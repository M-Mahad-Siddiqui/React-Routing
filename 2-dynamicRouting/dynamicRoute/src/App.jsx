import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/Header'
import Product from './pages/Product'
import Products from './pages/Products'


export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path = "/" element            = {<Products />} />
          <Route path = "/product/:id" element = {<Product />} />
        </Routes>
      </Router>
    </div>
  )
}
