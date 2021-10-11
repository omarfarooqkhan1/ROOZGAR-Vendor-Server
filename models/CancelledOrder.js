const mongoose = require("mongoose");

const cancelledOrderSchema = mongoose.Schema({
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
  vendorName: {
    type: String,
    default: "hamza",
  },
  image: {
    type: String,
    default:
      "https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
  },
  serviceTitle: {
    type: String,
    default: "not defined",
  },
  price: {
    type: String,
    default: "NOT FIXED",
  },
  completionTime: {
    type: String,
    default: "1 hour",
  },
  cancellationTime: {
    type: Date,
    default: Date.now,
  },
  cancelledBy: {
    type: String,
    default: "Vendor",
  },
});

cancelledOrderSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

cancelledOrderSchema.set("toJSON", {
  virtuals: true,
});

exports.CancelledOrder = mongoose.model("CancelledOrder", cancelledOrderSchema);
