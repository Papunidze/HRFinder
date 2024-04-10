const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  avatar: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      },
      message: "Invalid email format",
    },
  },
  password: {
    type: String,
    minlength: 8,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  about: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 250,
  },
  education: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  availability: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  location: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  birthday: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    minlength: 10,
    maxlength: 15,
  },
  experience: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    require: true,
  },
  skills: {
    type: [String],
  },
});

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
