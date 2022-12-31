import dotenv from 'dotenv'
import { Client, Events, GatewayIntentBits, TextChannel } from 'discord.js'
dotenv.config()
import { mute, unmute } from './commands/mute'
import { deafen, undeafen } from './commands/deaf'
import { channels, voiceChannels, textChannels } from './commands/channel'
import { gif } from './commands/gif'
import { members } from './commands/member'

const { BOT_TOKEN } = process.env

const client = new Client({
	intents: [
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildBans,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildVoiceStates,
	],
})

client.on(Events.ClientReady, (event) => {
	console.log('Bot is ready!', event.user.tag)
	client.guilds.cache.forEach((guild) => {
		const channels = guild.channels.cache as unknown as TextChannel[]
		const channel = channels.find(
			(channel) => channel.type === 0 && channel.rawPosition === 1
		)
		if (channel) channel.send('Bot is ready!')
	})
})

client.on(Events.MessageCreate, async (message) => {
	const splitMessage = message.content.split(' ')
	console.log({ splitMessage })
	const command = splitMessage[0]
	if (command === '!gif') gif(message, splitMessage)
	else if (command === '!mute') mute(message)
	else if (command === '!unmute') unmute(message)
	else if (command === '!deafen') deafen(message)
	else if (command === '!undeafen') undeafen(message)
	else if (command === '!members') members(message)
	else if (command === '!channels') channels(message)
	else if (command === '!voicechannels') voiceChannels(message)
	else if (command === '!textchannels') textChannels(message)
})

client.login(BOT_TOKEN)
