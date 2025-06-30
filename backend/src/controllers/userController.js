const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: { exclude: ['password'] }
    });
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar usuário.', error: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { firstname, surname, email, password } = req.body;

    if (!firstname || !surname || !email || !password) {
      return res.status(400).json({ message: 'Todos os campos obrigatórios devem ser preenchidos.' });
    }

    const newUser = await User.create({ firstname, surname, email, password });
    const userResponse = newUser.toJSON();
    delete userResponse.password;

    res.status(201).json({ message: 'Usuário cadastrado com sucesso!', user: userResponse });
  } catch (error) {
    // Erro de e-mail duplicado
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).json({ message: 'Email já cadastrado.' });
    }
    console.error(error);
    res.status(500).json({ message: 'Erro ao cadastrar usuário.', error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstname, surname, email, password } = req.body;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado para atualização.' });
    }

    // Atualiza os campos
    user.firstname = firstname || user.firstname;
    user.surname = surname || user.surname;
    user.email = email || user.email;

    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    await user.save(); // Salva as alterações

    // Exclui a senha do retorno
    const userResponse = user.toJSON();
    delete userResponse.password;

    res.status(200).json({ message: 'Usuário atualizado com sucesso!', user: userResponse });
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).json({ message: 'Email já cadastrado para outro usuário.' });
    }
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar usuário.', error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.destroy({
      where: { id: id }
    });

    if (result === 0){
      return res.status(404).json({ message: 'Usuário não encontrado para exclusão.' });
    }

    res.status(200).json({ message: 'Usuário deletado com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao deletar usuário.', error: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ['password'] }
    });
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar usuários.', error: error.message });
  }
};