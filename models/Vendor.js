const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
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
  cnic: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
    default: "",
  },
  passwordHash: {
    type: String,
    default: "",
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  joiningDate: {
    type: Date,
    default: Date.now,
  },
  cancelledOrders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CancelledOrder",
    },
  ],
  completedOrders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CompletedOrder",
    },
  ],
  ongoingOrder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "OngoingOrder",
  },
  lastcompletedOrder: [
    {
      type: Date,
      default: Date.now,
    },
  ],

  image: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    default: "",
  },
  level: {
    type: String,
    default: "",
  },
  acceptanceRate: {
    type: String,
    default: "",
  },
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
      default: [],
    },
  ],
  service: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      default: [],
    },
  ],
  subCategories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory",
      default: [],
    },
  ],
  stars: {
    type: String,
    default: "0",
  },
  cnicFront: {
    type: String,
    default: "",
  },
  cnicBack: {
    type: String,
    default: "",
  },

  payments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "payment",
      default: "",
    },
  ],
});

vendorSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

vendorSchema.set("toJSON", {
  virtuals: true,
});

mongoose.model("Vendor", vendorSchema);
