import React, { useState } from 'react';
import API from '../api';

const ReviewForm = ({ productId, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Create/fetch user by email
      const userRes = await API.post('/users', { email });
      const userId = userRes.data.id;

      // Step 2: Submit review
      await API.post('/reviews', {
        userId,
        productId: Number(productId),
        rating: Number(rating),
        review,
      });

      setRating('');
      setReview('');
      setEmail('');
      onSubmit();
    } catch (err) {
      console.error(err);
      alert("Error submitting review");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Leave a Review</h4>
      <input type="email" value={email} placeholder="Your Email" onChange={e => setEmail(e.target.value)} required />
      <br />
      <input type="number" value={rating} placeholder="Rating (1-5)" min="1" max="5" onChange={e => setRating(e.target.value)} />
      <br />
      <textarea value={review} placeholder="Write your review..." onChange={e => setReview(e.target.value)} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
