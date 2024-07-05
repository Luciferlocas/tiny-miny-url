import { Schema, models, model } from "mongoose";

const UrlSchema = new Schema({
  originalUrl: {
    type: String,
    required: true,
    unique: true,
  },
  shortId: {
    type: String,
    required: true,
    unique: true,
  },
});

const Url = models.Url || model("Url", UrlSchema);

export default Url;
