import CartItem from "../models/Cart.js";
import Product from "../models/Product.js";

// Add item to cart
export const addToCart = async (req, res) => {
  try {
    const { productId, quantity, size, color } = req.body;
    const userId = req.user._id; // Get user ID from token

    // Check if product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Check if the item is already in the cart
    const existingCartItem = await CartItem.findOne({ user: userId, product: productId, size, color });

    if (existingCartItem) {
      existingCartItem.quantity += quantity;
      existingCartItem.subtotal = existingCartItem.quantity * existingCartItem.price;
      await existingCartItem.save();
      return res.json({ message: "Cart updated", cartItem: existingCartItem });
    }

    // Create a new cart item
    const cartItem = new CartItem({
      user: userId,
      product: productId,
      name: product.name,
      image: product.images[0], // Assuming images is an array
      quantity,
      price: product.price,
      size,
      color,
      subtotal: product.price * quantity,
    });

    await cartItem.save();
    res.status(201).json({ message: "Item added to cart", cartItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Get all cart items for a user
export const getCartItems = async (req, res) => {
  try {
    const userId = req.user._id;
    const cartItems = await CartItem.find({ user: userId }).populate("product", "name price images");

    res.json({ cartItems });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Update cart item quantity
export const updateCartItem = async (req, res) => {
  try {
    const { quantity } = req.body;
    const cartItem = await CartItem.findById(req.params.id);

    if (!cartItem) return res.status(404).json({ message: "Cart item not found" });

    cartItem.quantity = quantity;
    cartItem.subtotal = cartItem.price * quantity;
    await cartItem.save();

    res.json({ message: "Cart updated", cartItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Remove a single cart item
export const removeCartItem = async (req, res) => {
  try {
    const cartItem = await CartItem.findById(req.params.id);

    if (!cartItem) return res.status(404).json({ message: "Cart item not found" });

    await cartItem.deleteOne();
    res.json({ message: "Item removed from cart" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Clear entire cart for a user
export const clearCart = async (req, res) => {
  try {
    const userId = req.user._id;
    await CartItem.deleteMany({ user: userId });

    res.json({ message: "Cart cleared successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
