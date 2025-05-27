import mongoose, {Schema} from 'mongoose';

const shopSchema = new Schema({
  shopname: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true
  },
  ownerName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  shopImage: {
    type: String, // URL to the shop image
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  contactNumber: {
    type: String,
    required: true,
    trim: true
  }
}, { timestamps: true });


export const Shop = mongoose.model("Shop", shopSchema);