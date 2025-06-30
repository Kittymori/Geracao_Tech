const Product = require('../models/Product');
const ProductImage = require('../models/ProductImage');
const ProductOption = require('../models/ProductOption');
const Category = require('../models/Category');
const ProductCategory = require('../models/ProductCategory');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        { model: ProductImage, as: 'images', attributes: ['id', 'path', 'enabled'] },
        { model: ProductOption, as: 'options', attributes: ['id', 'title', 'shape', 'radius', 'type', 'values'] },
        { model: Category, as: 'categories', attributes: ['id', 'name', 'slug'], through: { attributes: [] } } // through para tabelas N:M
      ]
    });
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar produtos.', error: error.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [
        { model: ProductImage, as: 'images', attributes: ['id', 'path', 'enabled'] },
        { model: ProductOption, as: 'options', attributes: ['id', 'title', 'shape', 'radius', 'type', 'values'] },
        { model: Category, as: 'categories', attributes: ['id', 'name', 'slug'], through: { attributes: [] } }
      ]
    });
    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado.' });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar produto.', error: error.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, slug, price, price_with_discount, enabled, use_in_menu, stock, description, images, options, categoryIds } = req.body;

    if (!name || !slug || price === undefined || price_with_discount === undefined) {
      return res.status(400).json({ message: 'Nome, slug, preço e preço com desconto são obrigatórios.' });
    }

    const newProduct = await sequelize.transaction(async (t) => {
      const product = await Product.create({
        name,
        slug,
        price,
        price_with_discount,
        enabled: enabled !== undefined ? enabled : false,
        use_in_menu: use_in_menu !== undefined ? use_in_menu : false,
        stock: stock !== undefined ? stock : 0,
        description: description || null,
      }, { transaction: t });

      if (images && images.length > 0) {
        const productImages = images.map(img => ({
          product_id: product.id,
          path: img.path,
          enabled: img.enabled !== undefined ? img.enabled : false,
        }));
        await ProductImage.bulkCreate(productImages, { transaction: t });
      }

      if (options && options.length > 0) {
        const productOptions = options.map(opt => ({
          product_id: product.id,
          title: opt.title,
          shape: opt.shape || 'square',
          radius: opt.radius || 0,
          type: opt.type || 'text',
          values: opt.values,
        }));
        await ProductOption.bulkCreate(productOptions, { transaction: t });
      }

      if (categoryIds && categoryIds.length > 0) {
        const productCategories = categoryIds.map(catId => ({
          product_id: product.id,
          category_id: catId,
        }));
        await ProductCategory.bulkCreate(productCategories, { transaction: t });
      }

      return product;
    });

    const createdProductWithAssociations = await Product.findByPk(newProduct.id, {
      include: [
        { model: ProductImage, as: 'images', attributes: ['id', 'path', 'enabled'] },
        { model: ProductOption, as: 'options', attributes: ['id', 'title', 'shape', 'radius', 'type', 'values'] },
        { model: Category, as: 'categories', attributes: ['id', 'name', 'slug'], through: { attributes: [] } }
      ]
    });

    res.status(201).json({ message: 'Produto cadastrado com sucesso!', product: createdProductWithAssociations });
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).json({ message: 'Slug do produto já em uso.' });
    }
   
    if (error.name === 'SequelizeForeignKeyConstraintError') {
      return res.status(400).json({ message: 'Uma ou mais categorias informadas não existem.', error: error.message });
    }
    console.error(error);
    res.status(500).json({ message: 'Erro ao cadastrar produto.', error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, slug, price, price_with_discount, enabled, use_in_menu, stock, description } = req.body;

    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado para atualização.' });
    }

    product.name = name || product.name;
    product.slug = slug || product.slug;
    product.price = price !== undefined ? price : product.price;
    product.price_with_discount = price_with_discount !== undefined ? price_with_discount : product.price_with_discount;
    product.enabled = enabled !== undefined ? enabled : product.enabled;
    product.use_in_menu = use_in_menu !== undefined ? use_in_menu : product.use_in_menu;
    product.stock = stock !== undefined ? stock : product.stock;
    product.description = description !== undefined ? description : product.description;

    await product.save();

    const updatedProductWithAssociations = await Product.findByPk(product.id, {
        include: [
            { model: ProductImage, as: 'images', attributes: ['id', 'path', 'enabled'] },
            { model: ProductOption, as: 'options', attributes: ['id', 'title', 'shape', 'radius', 'type', 'values'] },
            { model: Category, as: 'categories', attributes: ['id', 'name', 'slug'], through: { attributes: [] } }
        ]
    });

    res.status(200).json({ message: 'Produto atualizado com sucesso!', product: updatedProductWithAssociations });
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).json({ message: 'Slug do produto já em uso por outro produto.' });
    }
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar produto.', error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Product.destroy({
      where: { id: id }
    });

    if (result === 0) {
      return res.status(404).json({ message: 'Produto não encontrado para exclusão.' });
    }

    res.status(200).json({ message: 'Produto deletado com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao deletar produto.', error: error.message });
  }
};