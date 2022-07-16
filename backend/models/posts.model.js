const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    pseudo: {
      type: String,
      default: 'Pseudo',
    },
    userId: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      default: '',
    },
    likes: {
      type: Number,
      default: 0,
    },
    likeId: {
      type: Array,
      default: [],
    },
    message: {
      type: String
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);