const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use(cors());

app.get('/', (req, res) => {
  res.send('Backend está funcionando!');
});

app.use('/api/users', userRoutes);

module.exports = app;