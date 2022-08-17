const Product = require("../models/productModel.js")


//create Product -- admin

exports.createProduct = async (req,res,next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
}

//get product details

exports.getProduct = async (req,res,next)=>{
    var product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    res.status(200).json({
        success:true,
        product
    })
}

//update product -- admin

exports.updateProduct = async (req,res,next) => {
    console.log(req.params.id);
    let product = await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })
    res.status(200).json({
        success: true,
        product
    })
}
//get all product -- admin

exports.getAllProducts = async (req,res)=>{
    const products = await Product.find();


    res.status(200).json({
            Success: true,
            products
        })
}

//delete product --admin

exports.deleteProduct = async (req,res,next)=>{
    var product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
        success:true,
        product
    })
}