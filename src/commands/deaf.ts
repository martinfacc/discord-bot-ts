import { Message } from 'discord.js'

export const deafen = (message: Message) => {
	const member = message.mentions?.members?.first()
	if (!member) return
	member.voice.setDeaf(true)
}

export const undeafen = (message: Message) => {
	const member = message.mentions?.members?.first()
	if (!member) return
	member.voice.setDeaf(false)
}
