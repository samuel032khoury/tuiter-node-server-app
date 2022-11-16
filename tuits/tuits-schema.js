import mongoose from "mongoose";
import {ObjectID} from "mongodb";
const schema = mongoose.Schema({
  _id: ObjectID,
  topic: String,
  username: String,
  handle: String,
  time: String,
  image: String,
  title: String,
  tuit: String,
  liked: Boolean,
  likes: Number,
  replies: Number,
  retuits: Number,
}, {collection: 'tuits'});
export default schema;