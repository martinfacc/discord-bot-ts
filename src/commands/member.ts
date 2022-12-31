import { Message } from 'discord.js'

export const members = (message: Message) => {
	const members = message.guild?.members.cache
	if (!members) return
	members.forEach((member) => message.reply(member.user.username))
}
