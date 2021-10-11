const mongoose = require("mongoose");

const paymentReceiptSchema = mongoose.Schema({
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "client",
  },
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "vendor",
  },
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ongoingOrder",
  },

  clientuserName: {
    type: String,
    default: "User12345",
  },
  servicePrice: {
    type: Number,
  },
  distancePrice: {
    type: Number,
    default: 0,
  },
  partsPrice: {
    type: Number,
    default: 0,
  },
  totalAmount: {
    type: Number,
    default: 0,
  },

  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

paymentReceiptSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

paymentReceiptSchema.set("toJSON", {
  virtuals: true,
});

exports.PaymentReceipt = mongoose.model("PaymentReceipt", paymentReceiptSchema);
