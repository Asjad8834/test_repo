const mongoose = require("mongoose");

const purchaseSchema = mongoose.Schema({

  name:{
    type: String,
    trim: true,
  },

  type:{
    type: String,
    enum: ["Personal", "Company", "Fitness", "Food", "Travel"],
    default: "Personal",
  },

  reimbursement:{
    type: String,
    enum: ["yes", "no"],
    default: "yes",
  },

  customer:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "customers",
    required: false,
    index: true,
  }

}, {timestamps: true});

const purchaseModel = mongoose.model("purchases", purchaseSchema);

module.exports = purchaseModel;