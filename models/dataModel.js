import { Schema, model } from "mongoose";

const dataSchema = new Schema({
  count: Number,
});

export default model("count", dataSchema);
