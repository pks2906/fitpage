const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createUser = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await prisma.user.create({
      data: { email }
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Email already exists or invalid input.' });
  }
};
