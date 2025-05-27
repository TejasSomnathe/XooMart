import { Cart } from "../models/cart.model";
import { asyncHandler } from "../utils/asyncHandler";

const getCartByUserId = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const cart = await Cart.findOne({ userId }).populate("products.productId", "name price image");

  if (!cart) {
    return res.status(404).json({ message: "Cart not found" });
  }

  return res
    .status(201)
    .json(new ApiResponse(200, cart, "User register succesfully"));
});

export {getCartByUserId,}