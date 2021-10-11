const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    default: "",
  },
  cnic: {
    type: String,
    default: "",
  },
  passwordHash: {
    type: String,
    default: "",
  },
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "address",
    default: "",
  },
  payments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "payments",
      default: "",
    },
  ],
  phone: {
    type: String,
    default: "",
  },
  joiningDate: {
    type: Date,
    default: Date.now,
  },
  pastOrders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CompletedOrder",
      default: "",
    },
  ],
  cancelledOrders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CancelledOrder",
    },
  ],
  ongoingOrder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "OngoingOrder",
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    default: "",
  },
});

clientSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

clientSchema.set("toJSON", {
  virtuals: true,
});

exports.Client = mongoose.model("Client", clientSchema);
exports.clientSchema = clientSchema;
