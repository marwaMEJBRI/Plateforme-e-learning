const mongoose = require("mongoose");
const coursSchema = mongoose.Schema(
  {
    title: { type: String },
    coursPdf: { type: String },
    coursVideo: { type: String },
    LinkMeeting:{type: String},
    dateMeeting:{type: String},
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "person",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("cours", coursSchema);
