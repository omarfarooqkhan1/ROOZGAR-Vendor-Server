const mongoose = require("mongoose");

const BlockedVendorsSchema = new mongoose.Schema({
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
  phone: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
});

BlockedVendorsSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

BlockedVendorsSchema.set("toJSON", {
  virtuals: true,
});

mongoose.model("blockedvendors", BlockedVendorsSchema);
