import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Product from './pages/Product'
import Products from './pages/Products'

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path = "/" element            = {<Products />} />
          <Route path = "/product/:id" element = {<Product />} />
        </Routes>
      </Router>
    </div>
  )
}
