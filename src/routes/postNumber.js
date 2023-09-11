import express from "express"
import PostNumber from "../models/postNumber.js";

export const router = express.Router()

router.get("/", (req, res) => {
    PostNumber.find({})
    .then((response) => {
        res.status(200).send(response);
    })
    .catch((err) => {
        res.status(404).send({status: 404, error: err});
    })
})

router.put("/increase", (req, res) => {
    const id = "64feba985744fe7f0dd4cc7f"
    PostNumber.findOneAndUpdate({ _id: id }, { $inc: { postNumber: 1 } }, { new: true })
    .then(() => {
        res.status(200).send("post number was increased by 1")
    })
})

router.post("/", (req, res) => {
    PostNumber.create({postNumber: 1})
    .then(() => {
        res.status(200).send("1 was created :^)")
    })
})