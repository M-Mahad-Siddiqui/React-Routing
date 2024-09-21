import axios from 'axios';
import { useEffect, useState } from 'react';
import CategoriesChip from '../components/CategoriesChip';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [selectCategory, setSelectCategory] = useState("All");

  useEffect(() => {
    console.log("selectCategory", selectCategory)
    const url = selectCategory === "All" ? "https://dummyjson.com/products" : `https://dummyjson.com/products/category/${selectCategory}`;
    console.log("url", url)
    axios.get(url)
      .then((response) => {
        setProducts(response.data.products);  // Update state with fetched products
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selectCategory]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then((response) => {
        // console.log("response of categories", response)
        setCategory(response.data);  // Update state with fetched products
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  return (
    <div className='container mx-auto'>
      {loading ? (
        <h1 className='text-3xl text-center my-4'>Loading...</h1>
      ) : (
          <div>
            {/* for display chips */}
          <div className = 'flex flex-wrap justify-center my-4'>
            
              <CategoriesChip
          onClick    = { () => setSelectCategory("All")}
          isSelected = {selectCategory === "All"}
          category   = {{ slug: "All", name: "All Product", id: 0 }} key = {category.slug}
          />
            {category.map((category) => (
              <CategoriesChip onClick = {() => setSelectCategory(category.slug)} isSelected = {category.slug === selectCategory} key = {category.slug} category = {category} />
            ))}
          </div>

            {/* for display card */}
          <div className='flex flex-wrap justify-center my-4'>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
