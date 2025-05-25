import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, //cloudnary url
      requred: true,
    },
    thumbnail: {
      type: String, //cloudnary url
      requred: true,
    },
    title: {
      type: String,
      requred: true,
    },
    discription: {
      type: String,
      requred: true,
    },
    duration: {
      type: Number, //cloudnary url
      requred: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);
