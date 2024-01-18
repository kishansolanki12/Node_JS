// const products = require('../public/product.json');

const Product = require('../models/product.model');

exports.addProduct = async(req, res)=>{
    //  console.log(req.body);
    let newProduct = await product.create({...req.body});
    newProduct.save();
    res.json({product: newProduct,message: 'product added...'});
    products.push(req.body)
    res.json({message: 'Product Added...'});
};

exports.getAllProduct = async(req, res)=>{
    let products = await Product.find();
    res.json(products);

};


exports.getProduct = async (req, res)=>{
    let id = req.query.productId;
    // let product = products.find((e)=> e.id === id);
    let product = await Product.findById(id);
    if(!product){
        return res.json({message: 'product is not found'});
    }
    // let showProduct = {
    //     id: product._id,
    //     title: product.title
    // }
    // res.json({product:showProduct});
    res.json(product);
};

exports.updateProduct = async (req, res)=>{
    let id = req.query.productId;
    // let product = products.find((e)=> e.id === id);
    let product = await Product.findById(id);
    if(!product){
        return res.json({message: 'product is not found'});
    }
    product = await Product.findByIdAndUpdate(id,{ $set: {...req.body } },{ new: true});

    res.json({ product,message: 'Product is update...'});
}; 

exports.deleteProduct = async (req, res)=>{
    let id = +req.params.id;
    let index = products.findIndex((e)=> e.id === id);
    let replaceProduct = products[index];
    // console.log(replaceProduct);
    products.splice(index, 1)
    res.json({message: 'Product is Deleted....'});
};