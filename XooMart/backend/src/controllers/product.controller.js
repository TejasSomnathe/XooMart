import { Product } from "../models/product.model";
import { asyncHandler } from "../utils/asyncHandler";

// GET /products/:id - Show product details by ID
const getProductById = asyncHandler(async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json(product);
});

export { getProductById };