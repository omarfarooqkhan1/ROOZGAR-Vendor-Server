const mongoose = require("mongoose");

const subcategorySchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    default: "",
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  price: {
    type: Number,
    required: true,
  },
});

subcategorySchema.virtual("id").get(function () {
  return this._id.toHexString();
});

subcategorySchema.set("toJSON", {
  virtuals: true,
});

mongoose.model("SubCategory", subcategorySchema);
