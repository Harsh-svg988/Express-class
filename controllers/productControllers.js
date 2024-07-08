const productModel = require('../models/product');


exports.createProducts = async(req,res)=>{
    await productModel.create({
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        isInStock: req.body.isInStock,
        Category: req.body.Category
    });
    
    return res.status(201).json({message :"Product Created"});
}


exports.getAllProducts = async(req,res)=>{
    const allProducts = await productModel.find({});
    return res.json(allProducts);
}


exports.getById = async(req,res)=>{
    const product = await productModel.findById(req.params.id);
    return res.json(product);
}


exports.updateProducts = async (req, res) => {
    try {
      const product = await productModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
      return res.json(product);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }


exports.deletedProduct = async(req,res)=>{
    const deletedProduct = await productModel.findByIdAndDelete(req.params.id);
    return res.json(deletedProduct);
}


exports.allDeletedProducts = async(req,res)=>{
    const deletedProducts = await productModel.deleteMany({});
    return res.json(deletedProducts);
}