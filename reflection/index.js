const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

const command = requir e('./command')
client.on('ready', () => {
  console.log('The client is ready')
  // if a certain command is received, do THIS
  command(client, ['start', 'end'], (message) => {
    // what info exactly does message contain
    message.channel.send('Pong!')
  })
})

client.login(config.token)
