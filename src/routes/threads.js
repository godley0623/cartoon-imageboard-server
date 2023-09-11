import express from "express"
import Thread from "../models/thread.js"

export const router = express.Router()

router.get("/", (req, res) => {
    Thread.find({})
    .then((response) => {
        res.status(200).send(response);
    })
    .catch((err) => {
        res.status(404).send({status: 404, error: err});
    })
})

router.post("/", (req, res) => {
    Thread.create(req.body)
    .then(() => {
        res.status(200).send('Thread was created');
    })
    .catch((err) => {
        res.status(404).send({status: 404, error: err});
    })
})

