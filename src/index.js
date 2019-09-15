const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.DISCORD_BOT_TOKEN
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', message => {
    if (message.content.toLocaleLowerCase() === 'ping') message.channel.send('pong')
})

client.on('message', (message) => {
    if (message.content.toLocaleLowerCase() === '.avatar') message.reply(message.author.avatarURL)
})

client.on('message', (msg) => {
    if (msg.content.toLowerCase() === '.ma') msg.channel.send('TU FURA ROLE MA')
})

const yum = client.emojis.get('d51bbfccef4b12d5441ca23da921c604')

client.login(token)