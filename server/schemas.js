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
      match: [
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must contain at least 8 characters, one letter, one number and one special character",
      ],
    },
    profilePicture: {
      type: String,
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

const HousePropertySchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    brief: {
      type: String,
      required: true,
    },
    postOwner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: {
        values: ["apartment", "house", "villa", "other"],
        message: "{VALUE} is not supported",
      },
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    listedBy: {
      type: String,
      required: true,
    },
    furnishing: {
      type: String,
      required: true,
      enum: ["unfurnished", "semi-furnished", "furnished"],
    },
    carpetArea: {
      type: Number,
      required: true,
    },
    superBuiltupArea: {
      type: Number,
      required: true,
    },
    maintenance: {
      type: Number,
      required: true,
    },
    bachelorsAllowed: {
      type: Boolean,
      required: true,
    },
    totalFloors: {
      type: Number,
      required: true,
    },
    floorNo: {
      type: Number,
      required: true,
    },
    carParking: {
      type: Number,
      required: true,
      min: 0,
    },
    projectName: {
      type: String,
      required: true,
    },
    pictures: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const HouseProperty = mongoose.model("HouseProperty", HousePropertySchema);
const User = mongoose.model("users", UserSchema);

module.exports = { HouseProperty, User };
