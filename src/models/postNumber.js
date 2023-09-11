import mongoose from "mongoose";
const Schema = mongoose.Schema

const postNumberSchema = new Schema({
    postNumber: { type: Number }
})

const PostNumber = mongoose.model('postnumber', postNumberSchema);
export default PostNumber;