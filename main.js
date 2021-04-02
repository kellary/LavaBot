'use strict';


const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix, token} = require('./botconfig.json');
const {Client, Attachment, MessageEmbed, message} = require('discord.js');

const embed = new MessageEmbed();



const gift = require('./command/gift');
const utility = require('./utilitymain');
const avatar = require('./utilitycommand/uconfig.json')


const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./maincommand/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./maincommand/${file}`);

    client.commands.set(command.name, command);
};




client.on('ready', () => {
    console.log(`LavaHeler is online ${client.user.tag}`);
    console.log(`Bot working in =${client.guilds.cache.size} guilds`);
    client.user.setActivity(`bot in developing. Wait for end. Prefix bot${prefix}`, { type: 'PLAYING' });
});





client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const help = new Discord.MessageEmbed()
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'info'){
    client.commands.get('info').execute(message, args);

    } else if (command === 'info'){

    };

    if(command === 'sea') {
        client.commands.get('sea').execute(message, args);
       } else if (command === 'sea')
    {};

    if(command === 'catacomb') {
        client.commands.get('catacomb').execute(message, args);
    } else if (command === 'catacomb')
    {}
    

    if(command === 'forest') {
        client.commands.get('forest').execute(message, args);

    } else if (command === 'forest')
    {}
});

client.on('guildMemberAdd', member =>{
   const channel = member.guild.channels.find(channel => channel.name === "welcome");
   if(!channel) return;

   channel.send(`Добро пожаловать на наш сервер! ${member}.`)
});




client.login(token);