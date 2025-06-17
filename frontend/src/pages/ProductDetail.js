import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';
import ReviewForm from '../components/ReviewForm';

const ProductDetail = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [product, setProduct] = useState({});

  const fetchReviews = () => {
    API.get(`/reviews/${id}`)
      .then(res => setReviews(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchReviews();
    API.get('/products')
      .then(res => {
        const prod = res.data.find(p => p.id === Number(id));
        setProduct(prod);
      });
  }, [id]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{product.name}</h2>
      <h4>Reviews</h4>
      {reviews.map(r => (
        <div key={r.id}>
          <p><strong>{r.user.email}</strong>: {r.review || 'No text'} ({r.rating || 'No rating'})</p>
        </div>
      ))}

      <ReviewForm productId={id} onSubmit={fetchReviews} />
    </div>
  );
};

export default ProductDetail;
