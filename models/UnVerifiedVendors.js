const mongoose = require("mongoose");

const unverifiedvendorsSchema = new mongoose.Schema({
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
  cnicFront: {
    type: String,
    default: "",
  },
  cnicBack: {
    type: String,
    default: "",
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  // passwordHash: {
  //   type: String,
  //   default: "",
  // },
  phone: {
    type: String,
    default: "",
  },
  // isAdmin: {
  //   type: Boolean,
  //   default: false,
  // },
  joiningDate: {
    type: Date,
    default: Date.now,
  },
  // acceptedOrders: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "orders",
  //   },
  // ],
  // cancelledOrders: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "orders",
  //   },
  // ],
  image: {
    type: String,
    default: "",
  },
  // images: [
  //   {
  //     type: String,
  //     default: "",
  //   },
  // ],
  // status: {
  //   type: String,
  //   default: "",
  // },
  // level: {
  //   type: String,
  //   default: "",
  // },
  // acceptanceRate: {
  //   type: String,
  //   default: "",
  // },
  // address: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "address",
  // },
  // comment: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "comment",
  //     default: [],
  //   },
  // ],
  // service: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "service",
  //     default: [],
  //   },
  // ],
  // hearts: {
  //   type: String,
  //   default: "0",
  // },
});

unverifiedvendorsSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

unverifiedvendorsSchema.set("toJSON", {
  virtuals: true,
});

mongoose.model("unverifiedvendors", unverifiedvendorsSchema);
