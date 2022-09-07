const catchAsyncError = require("../middleware/catchAsyncError.js");
const Product = require("../models/productModel.js");
const ApiFeatures = require("../utils/apiFeatures.js");
const ErrorHandler = require("../utils/errorHandler.js");

//create Product -- admin

exports.createProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

//get product details

exports.getProduct = catchAsyncError(async (req, res, next) => {
  console.log(req.params.id);
  var product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

//update product -- admin

exports.updateProduct = catchAsyncError(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
});
//get all product -- admin

exports.getAllProducts = catchAsyncError(async (req, res) => {
  let resultPerPage = 5;
  let productCount = await Product.countDocuments();

  const apiFeatures = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);

  const products = await apiFeatures.query;

  res.status(200).json({
    Success: true,
    products,
    productCount
  });
});

//delete product --admin

exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  var product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  product = await Product.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
    product,
  });
});
