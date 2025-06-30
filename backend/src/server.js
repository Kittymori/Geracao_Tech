// src/server.js
require('dotenv').config();
const app = require('./app.js');
const sequelize = require('./config/database.js');

const PORT = process.env.PORT || 3001;

require('./models/User.js');
require('./models/Category.js');
require('./models/Product.js');
require('./models/ProductImage.js');
require('./models/ProductOption.js');
require('./models/ProductCategory.js');

sequelize.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor backend rodando na porta ${PORT}`);
      console.log('Banco de dados sincronizado (SQLite)!');
    });
  })
  .catch(err => {
    console.error('Erro ao conectar ou sincronizar com o banco de dados:', err);
  });