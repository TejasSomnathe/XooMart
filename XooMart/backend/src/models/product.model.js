import mongoose, {Schema} from 'mongoose';

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    index: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  stockQuantity: {
    type: Number,
    default: 0,
    min: 0
  },
  imageUrl: {
    type: String, // URL to the product image
    required: false
  }
}, { timestamps: true  });    

productSchema.pre("save", function (next) {
  if (this.isModified("price") && this.price < 0) {
    return next(new Error("Price cannot be negative"));
  }
  next();
})

export const Product = mongoose.model("Product", productSchema);