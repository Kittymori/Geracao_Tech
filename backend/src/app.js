const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');

const authMiddleware = require('./middlewares/authMiddleware');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Backend está funcionando!');
});
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use(authMiddleware.verifyToken);
app.use('/api/products', productRoutes);

module.exports = app;