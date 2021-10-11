const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "service",
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "client",
  },
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "vendor",
  },
  appoitmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ongoingOrder",
  },
  description: {
    type: String,
    default: "",
  },
  vendorName: {
    type: String,
    default: "",
  },
  clientName: {
    type: String,
    default: "User12345",
  },

  images: [
    {
      type: String,
      default: "",
    },
  ],

  rating: {
    type: Number,
    default: null,
  },

  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

reviewSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

reviewSchema.set("toJSON", {
  virtuals: true,
});

exports.Review = mongoose.model("Review", reviewSchema);
