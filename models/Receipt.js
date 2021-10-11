const mongoose = require("mongoose");

const receiptSchema = mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "acceptedorder",
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "client",
  },
  clientUserName: {
    type: String,
    default: "",
  },
  clientImage: {
    type: String,
    default: "",
  },
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "vendor",
  },
  vendorUserName: {
    type: String,
    default: "",
  },
  vendorImage: {
    type: String,
    default: "",
  },
  distance: {
    type: String,
    default: "",
  },
  serviceTitle: {
    type: String,
    default: "",
  },
  clientLocation: {
    type: String,
    default: "",
  },
  servicePrice: {
    type: String,
    default: "",
  },
  distanceCharges: {
    type: String,
    default: "",
  },
  totalAmount: {
    type: String,
    default: "",
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

receiptSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

receiptSchema.set("toJSON", {
  virtuals: true,
});

exports.Receipt = mongoose.model("Receipt", receiptSchema);
