const mongoose = require("mongoose");

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
      enum: ["owner", "agent", "other"],
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
    price: {
      type: Number,
      required: true,
    },
    genderPref: {
      type: String,
      required: true,
      enum: ["male", "female", "no preference"],
    },
    depositAmount: {
      type: Number,
      required: true,
    },

    // Detailed Location Properties
    location: {
      city: {
        type: String,
        required: true,
      },
      area: {
        type: String,
        required: true,
      },
      locality: {
        type: String,
      },
      fullAddress: {
        type: String,
        required: true,
      },
      pinCode: {
        type: String,
        required: true,
      },
      landmark: {
        type: String,
      },
    },
    availabilityDate: {
      type: Date,
      required: true,
    },
    amenities: {
      type: [String],
      enum: [
        "parking",
        "pool",
        "PowerBackup",
        "Lift",
        "gym",
        "security",
        "clubhouse",
        "petfriendly",
        "foodservice",
        "wifi",
        "Laundry",
      ],
    },
    petsAllowed: {
      type: Boolean,
      default: false,
    },
    electricityChargesIncluded: {
      type: Boolean,
      default: false,
    },
    negotiable: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const HouseProperty = mongoose.model("HouseProperty", HousePropertySchema);

module.exports = { HouseProperty };
