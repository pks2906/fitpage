import React, { useEffect, useState } from 'react';
import API from '../api';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get('/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id}>
          <Link to={`/product/${p.id}`}>
            <h3>{p.name}</h3>
          </Link>
          <p>Average Rating: {p.avgRating ? p.avgRating.toFixed(1) : 'No ratings yet'}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Home;
