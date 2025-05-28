import { Product } from "../models/product.model";
import { asyncHandler } from "../utils/asyncHandler";

 
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
    imageUrl: product.imageUrl
  })
})

export { getProductById, viewProduct }