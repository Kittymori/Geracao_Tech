const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes.js');
const productRoutes = require('./routes/productRoutes.js');
const authRoutes = require('./routes/authRoutes.js');

const authMiddleware = require('./middleware/authMiddleware.js');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Backend está funcionando!');
});
app.use('/api/auth', authRoutes);
app.use(authMiddleware.verifyToken);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

module.exports = app;