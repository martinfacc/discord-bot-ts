import dotenv from 'dotenv'
dotenv.config()
import { Message } from 'discord.js'
import axios from 'axios'

const { GIPHY_API_KEY } = process.env

export const gif = async (message: Message, splitMessage: string[]) => {
	const gifSearchText = splitMessage.slice(0, splitMessage.length).join(' ')
	const url = `http://api.giphy.com/v1/gifs/search?q=${gifSearchText}&api_key=${GIPHY_API_KEY}&limit=100`
	const { data } = await axios.get(url)
	const gifs = data.data
	const gif = gifs[Math.floor(Math.random() * gifs.length)]
	message.reply(gif.url)
}
