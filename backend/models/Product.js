import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discountPrice:{type:Number},
    countInStock: { type: Number, required: true, default: 0 },
    sku: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    sizes: [{ type: String }],
    colors: [{ type: String }],
    collections: { type: String },
    materials: { type: String },
    gender: { type: String ,enum:["Men","Women","Unisex"]},
    images: [{ url: { type: String, required: true } },{altText:{type:String}}],
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    isFeatured:{
        type:Boolean,default:false
    },
    isPubliched:{type:Boolean,default:false},
    rating:{type:Number,default:0},
    numReviews:{type:Number,default:0},
    tags:[String],
    metaTitle:{type:String},
    metaDescription:{type:String},
    metaKeywords:{type:String},
    dimensions:{length:Number,width:Number,height:Number},
    weight:Number
    
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
