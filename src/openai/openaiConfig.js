import openai from "openai";
import dotenv from 'dotenv'

dotenv.config()

export const openaiConfig = new openai({
  apiKey: process.env.OPENAI_API_KEY
})