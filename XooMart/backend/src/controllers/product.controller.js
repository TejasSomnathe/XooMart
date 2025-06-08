import { Product } from "../models/product.model";
import { asyncHandler } from "../utils/asyncHandler";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const addProduct = asyncHandler(async (req, res) => {
  const { name, description, price, category, stockQuantity } = req.body;
  if (!name || !description || !price || !category) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const imageUrl = req.file ? req.file.path : null;

  const cloudinaryUrl = await uploadOnCloudinary(imageUrl);
  if (!cloudinaryUrl) {
    return res.status(500).json({ message: "Failed to upload product image" });
  }

  const product = await Product.create({
    name,
    description,
    price,
    category,
    stockQuantity: stockQuantity || 0,
    imageUrl: cloudinaryUrl,
  });

  if (!product) {
    throw new ApiError(
      500,
      "Something went wrong while registering the product"
    );
  }

  return res
    .status(201)
    .json(new ApiResponse(200, product, "User register succesfully"));
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

export { getProductById, viewProduct, addProduct };
