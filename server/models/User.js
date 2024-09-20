const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
      unique: true,
      match: [/^[0-9]{10}$/, "Please enter a valid mobile number"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    adsPosted: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "HouseProperty",
      },
    ],
    postsSaved: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "HouseProperty",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("users", UserSchema);

module.exports = { User };
