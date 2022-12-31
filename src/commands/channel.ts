import { Message } from 'discord.js'

export const channels = (message: Message) => {
	const channels = message.guild?.channels.cache
	if (!channels) return
	channels.forEach((channel) => message.reply(channel.name))
}

export const voiceChannels = (message: Message) => {
	const channels = message.guild?.channels.cache
	if (!channels) return
	channels.forEach((channel) => {
		if (channel.type === 2) message.reply(channel.name)
	})
}

export const textChannels = (message: Message) => {
	const channels = message.guild?.channels.cache
	if (!channels) return
	channels.forEach((channel) => {
		if (channel.type === 0) message.reply(channel.name)
	})
}
