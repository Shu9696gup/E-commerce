const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    
    trim: true,
  },
  description: {
    type: String,
    required: [true],
  },
  price: {
    type: Number,
    required: [true],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category:{
    type:String,
    required:[true]
  },
  Stock:{
    type:Number,
    required:[true],
    maxLength:[4],
    default:1
  },
  noOfReviews:{
    type:Number,
    default:0
  },
  reviews:[
    {
        name:{
            type:String,
            required:true
        },
        rating:{
            type:Number,
            required:true
        },
        comment:{
            type:String,
            required:true
        }
    }
  ],
  createdAt:{
    type:Date,
    default:Date.now
  }
});

module.exports= mongoose.model("Product",productSchema);
