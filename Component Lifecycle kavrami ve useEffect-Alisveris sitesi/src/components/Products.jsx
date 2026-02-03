import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';

export default function Products({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error('Ürünler alınamadı!', err));
  }, [category]);

  return (
    <div className="main-area">
      <h2>{category.toUpperCase()}</h2>
      <div className="products-container">
        <ProductList products={products} />
      </div>
    </div>
  );
}
