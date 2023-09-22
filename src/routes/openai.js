import express from 'express'
import { openaiConfig as openai } from '../openai/openaiConfig.js'

export const router = express.Router()

router.post('/', async (req, res) => {
    const language = req.body.language
    const text = req.body.text
    const model = req.body.model
    const prompt = `Copy everything. Include all special characters. And translate it to ${language}. Do not include any extra text.`
    //const prompt = `Translate what the user says to ${language}. Do not translate if it's already in ${language}. Include all ">" that's in the user's message.`

    try {
        const chatCompletion = await openai.chat.completions.create({
            model: model,
            temperature: 0,
            max_tokens: 256,
            messages: [ { "role": "system", "content": prompt }, {"role": "user", "content": text}],
        })

        const completion = chatCompletion.choices[0].message.content
        console.log(chatCompletion.choices[0].message)
        res.status(200).send({message: completion})
    } catch(error) {
        console.log(error)
        res.status(200).send({message: "Failed to translate text"})
    }
})
