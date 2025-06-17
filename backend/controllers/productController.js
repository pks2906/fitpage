const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createProduct = async (req, res) => {
  const { name } = req.body;

  try {
    const product = await prisma.product.create({ data: { name } });
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: 'Could not create product' });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      include: {
        reviews: {
          select: { rating: true }
        }
      }
    });

    const productsWithAvgRating = products.map(p => {
      const ratings = p.reviews.map(r => r.rating).filter(Boolean);
      const avgRating = ratings.length ? ratings.reduce((a, b) => a + b, 0) / ratings.length : null;
      return { ...p, avgRating };
    });

    res.json(productsWithAvgRating);
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch products' });
  }
};
