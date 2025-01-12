import mongoose from "mongoose";

const literatureSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    approvalStatus: {
      type: Boolean,
      required: true,
      default: false,
    },
    literatureType: {
      type: String,
      required: true,
      default: "Others",
    },
  },
  {
    timestamps: true,
  }
);

const Literature = mongoose.model("Literature", literatureSchema);
export default Literature;
