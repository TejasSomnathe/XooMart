import { Cart } from "../models/cart.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addProductToCart = asyncHandler(async (req, res) => {
  const productId = req.params.productId;
  const userId = req.user._id;
  const quantity = req.body.quantity || 1;

  let cart = await Cart.findOne({ userId });

  if (!cart) {
    cart = new Cart({
      userId,
      products: [{ productId, quantity }],
    });
  } else {
    const productIndex = cart.products.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (productIndex > -1) {
      cart.products[productIndex].quantity += quantity;
    } else {
      cart.products.push({ productId, quantity });
    }
  }

  await cart.save();
  res.status(200).json({ message: "Product added to cart", cart });
});

const getCart = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const cart = await Cart.findOne({ userId }).populate("products.productId");

  if (!cart) {
    return res.status(200).json({ cart: { products: [], totalPrice: 0 } });
  }

  res.status(200).json({ cart });
});

const updateQuantity = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const { productId } = req.params;
  const { change } = req.body;

  const cart = await Cart.findOne({ userId });

  if (!cart) throw new Error("Cart not found");

  const index = cart.products.findIndex(
    (item) => item.productId.toString() === productId
  );

  if (index === -1) throw new Error("Product not in cart");

  cart.products[index].quantity += change;

  if (cart.products[index].quantity < 1) {
    cart.products.splice(index, 1); // remove if quantity is 0
  }

  await cart.save();
  res.status(200).json({ message: "Quantity updated", cart });
});

const removeFromCart = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const { productId } = req.params;

  const cart = await Cart.findOne({ userId });

  if (!cart) throw new Error("Cart not found");

  cart.products = cart.products.filter(
    (item) => item.productId.toString() !== productId
  );

  await cart.save();
  res.status(200).json({ message: "Product removed", cart });
});

const clearCart = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const cart = await Cart.findOne({ userId });
  if (!cart) throw new Error("Cart not found");

  cart.products = [];
  cart.totalPrice = 0;

  await cart.save();
  res.status(200).json({ message: "Cart cleared", cart });
});

export { addProductToCart, getCart, updateQuantity, removeFromCart, clearCart };
