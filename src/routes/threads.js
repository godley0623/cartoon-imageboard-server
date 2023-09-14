import express from "express"
import Thread from "../models/thread.js"
import { deleteThreadContent } from "../cloudinary/cloudinaryConfig.js"

export const router = express.Router()

router.get("/", (req, res) => {
    Thread.find({})
    .then((response) => {
        res.status(200).send(response)
    })
    .catch((err) => {
        res.status(404).send({status: 404, error: err})
    })
})

router.get("/:id", (req, res) => {
    const id = Number(req.params.id)
    Thread.findOne({ postNumber: id })
    .then((response) => {
        res.status(200).send(response)
    })
    .catch((err) => {
        res.status(404).send({status: 404, error: err})
    })
})

router.put("/reply/:id", (req, res) => {
    const id = req.params.id
    Thread.findOneAndUpdate( { postNumber: id }, { replies: req.body } )
    .then(() => {
        res.status(200).send('Replies were updated')
    })
    .catch((err) => {
        res.status(404).send({status: 404, error: err})
    })
})

router.post("/", (req, res) => {
    Thread.create(req.body)
    .then(() => {
        res.status(200).send('Thread was created')
    })
    .catch((err) => {
        res.status(404).send({status: 404, error: err})
    })
})

router.delete("/:id", (req, res) => {
    const postNumber = Number(req.params.id)
    deleteThreadContent(postNumber)

    Thread.findOneAndDelete( { postNumber: postNumber } )
    .then(() => {
        res.status(200).send('Thread was deleted')
    })
    .catch((err) => {
        res.status(404).send({status: 404, error: err})
    })
})

