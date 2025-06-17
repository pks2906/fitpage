const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.submitReview = async (req, res) => {
  const { userId, productId, rating, review, imageUrl } = req.body;

  try {
    const newReview = await prisma.review.create({
      data: {
        userId: Number(userId),
        productId: Number(productId),
        rating: Number(rating),
        review,
        imageUrl
      }
    });

    res.status(201).json(newReview);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Review already exists or bad input.' });
  }
};

exports.getReviewsByProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    const reviews = await prisma.review.findMany({
      where: { productId: Number(productId) },
      include: { user: true }
    });

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch reviews' });
  }
};
