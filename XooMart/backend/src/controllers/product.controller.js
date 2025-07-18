import { Product } from "../models/product.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiErrors.js";

const addProduct = asyncHandler(async (req, res) => {
  const { name, description, price, category, stockQuantity } = req.body;
  if (!name || !description || !price || !category) {
    return res.status(400).json({ message: "All fields are required" });
  }

  let shopImageLocalPath = "";
  if (req.files && req.files.imageUrl && req.files.imageUrl.length > 0) {
    shopImageLocalPath = req.files.imageUrl[0].path;
  } else {
    return res.status(400).json({ message: "Shop image is required" });
  }

  const cloudinaryUrl = await uploadOnCloudinary(shopImageLocalPath);
  if (!cloudinaryUrl) {
    return res.status(500).json({ message: "Failed to upload product image" });
  }

  const product = await Product.create({
    name,
    description,
    price,
    category,
    stockQuantity: stockQuantity || 0,
    imageUrl: cloudinaryUrl.url,
  });

  if (!product) {
    throw new ApiError(
      500,
      "Something went wrong while registering the product"
    );
  }

  return res
    .status(201)
    .json(new ApiResponse(200, product, "Product add succesfully"));
});

const getProductById = asyncHandler(async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json(product);
});

const viewProduct = asyncHandler(async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json({
    id: product._id,
    name: product.name,
    description: product.description,
    price: product.price,
    category: product.category,
    stockQuantity: product.stockQuantity,
    imageUrl: product.imageUrl,
  });
});

const viewProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  if (req.query.search) {
    const filteredProducts = products.filter((product) =>
      product.name.includes(req.query.search)
    );
    return res.status(200).json(filteredProducts);
  }

  return res.status(200).json(products);
});

export { getProductById, viewProduct, addProduct, viewProducts };
