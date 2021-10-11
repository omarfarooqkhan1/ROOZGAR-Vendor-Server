const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "vendor",
  },
  vendorName: {
    type: String,
    default: "vendor name here",
  },
  title: {
    type: String,
    default: "title here",
  },
  description: {
    type: String,
    default: "description here",
  },
  image: {
    type: String,
    default: "",
  },
  images: [
    {
      type: String,
    },
  ],
  price: {
    type: Number,
    default: 0,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  subCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubCategory",
  },
  availibility: {
    type: String,
    default: "avialibility here",
  },
  hearts: {
    type: String,
    default: "0",
  },
  numComments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
  isFeatured: {
    type: Boolean,
    default: false,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  online: {
    type: Boolean,
    default: false,
  },
});

serviceSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

serviceSchema.set("toJSON", {
  virtuals: true,
});

mongoose.model("Service", serviceSchema);
