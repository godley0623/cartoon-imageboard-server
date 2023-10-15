import mongoose from "mongoose";
const Schema = mongoose.Schema

const threadSchema = new Schema({
    owner: {type: String, required: true},
    name: { type: String, required: true },
    subject: { type: String },
    comment: { type: String },
    created_at: { type: String, required: true },
    postNumber: { type: Number, required: true },
    replies: { type: Array, required: true },
    fileData: {
        filename: { type: String, required: true },
        format: { type: String, required: true },
        width: { type: Number, required: true },
        height: { type: Number, required: true },
        bytes: { type: Number, required: true },
        url: { type: String, required: true }
    }
})

const Thread = mongoose.model('Thread', threadSchema);
export default Thread;