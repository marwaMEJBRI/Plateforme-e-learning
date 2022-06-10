const mongoose = require("mongoose");
const coursProfASchema = mongoose.Schema(
  {
    title: { type: String },
    coursPdf: { type: String },
    coursVideo: { type: String },
    meeting:{type: String},
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
module.exports = mongoose.model("coursProfA", coursProfASchema);
