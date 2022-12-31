import { Message } from 'discord.js'

export const mute = (message: Message) => {
	const member = message.mentions?.members?.first()
	if (!member) return
	member.voice.setMute(true)
}

export const unmute = (message: Message) => {
	const member = message.mentions?.members?.first()
	if (!member) return
	member.voice.setMute(false)
}
