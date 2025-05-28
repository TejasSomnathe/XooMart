import { Cart } from "../models/cart.model";
import { asyncHandler } from "../utils/asyncHandler";

 

const addProductToCart = asyncHandler(async (req, res) => {
  const productId = req.params.productId;
  const userId = req.user._id;
  const quantity = req.body.quantity || 1;

  let cart = await Cart.findOne({ userId });

  if (!cart) {
   
    cart = new Cart({
      userId,
      products: [{ productId, quantity }]
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

export { getCartByUserId, addProductToCart };