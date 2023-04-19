const mongoose = require("mongoose");

const HeroSchema = new mongoose.Schema({
  superhero: {
    type: String,
    required: [true, "Please name the hero"],
    unique: true,
    minlength: [3, "Name must be at least 3 characters long"],
    trim: true,
  },
  realName: {
    type: String,
    required: [true, "Please name the hero"],
    maxLength: [150, "Please keep real name short"],
  }
});

module.exports = mongoose.models.Hero || mongoose.model("Hero", HeroSchema);
