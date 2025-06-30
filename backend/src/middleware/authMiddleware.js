const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  if (req.method === 'GET') {
      return next();
  }

  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ message: 'Token de autenticação não fornecido.' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Formato de token inválido (esperado: "Bearer TOKEN").' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(403).json({ message: 'Token de autenticação expirado.' });
    }
    console.error('Erro de validação do token:', error);
    res.status(403).json({ message: 'Token de autenticação inválido.' });
  }
};