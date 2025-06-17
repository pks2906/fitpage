const express = require('express');
const router = express.Router();
const { submitReview, getReviewsByProduct } = require('../controllers/reviewController');

router.post('/', submitReview);
router.get('/:productId', getReviewsByProduct);

module.exports = router;
