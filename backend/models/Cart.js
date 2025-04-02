import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema(
  {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true, // Ensures the cart is linked to a user
      },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true, // Ensures a valid product reference
    },
    name:String,
    image:String,

    quantity: {
      type: Number,
      required: true,
      min: 1, // Prevents negative or zero quantity
      default: 1,
    },
    price: {
      type: Number,
      required: true, // Stores the price at the time of adding to cart
    },
    size: {
      type: String, // Optional (e.g., "M", "L", "XL")
    },
    color: {
      type: String, // Optional (e.g., "Red", "Blue")
    },
    subtotal: {
      type: Number, // Calculated as `price * quantity`
    },
  },
  { timestamps: true }
);

export default mongoose.model("CartItem", cartItemSchema);
