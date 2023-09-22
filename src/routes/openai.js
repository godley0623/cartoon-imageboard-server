import express from 'express'
import { openaiConfig as openai } from '../openai/openaiConfig.js'

export const router = express.Router()

router.get('/', async (req, res) => {
    const language = req.body.language
    const text = req.body.text
    const prompt = `Translate the given text to ${language}. If the given text is already in ${language}, then just repeat the entire given text. If the given text includes special characters like ">" be sure to include them in the translated response.`

    try {
        const chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            temperature: 0,
            max_tokens: 256,
            messages: [ { "role": "system", "content": prompt }, {"role": "user", "content": text}],
        })

        const completion = chatCompletion.choices[0].message.content
        console.log(chatCompletion.choices[0].message)
        res.status(200).send({message: completion})
    } catch {
        res.status(200).send({message: "Failed to translate text"})
    }
})
