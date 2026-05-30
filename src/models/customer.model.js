const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({

name:{
  type: String,
  required: true,
  trim: true,
},

email:{
    type: String,
    required: [true, "Email is required"],
    trim: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, " Please provide a Valid email address"],
    lowercase: true,
  },

  password:{
    type: String,
    required: [true, "Password is required"],
    trim: true,
    minLength: 5,
  },

  city:{
    type: String,
    required: false,
    trim: true,
  },

  designation:{
    type: String,
    required: [true, "Designation is reequired"],
    enum: ["Staff", "Management", "Manager", "Head"],
    deafult: "Staff",
  }

});

const customerModel = mongoose.model("customers", customerSchema);

module.exports = customerModel;