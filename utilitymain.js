'use strict';

const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./utilitycommand/uconfig.json');
const {Client, Attachment, MessageEmbed, message} = require('discord.js');

client.on('ready', () => {
    console.log(`Utility plugin already work.`);

});


const embed = new MessageEmbed();


const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./utilitycommand/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./utilitycommand/${file}`);

    client.commands.set(command.name, command);
};





client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const help = new Discord.MessageEmbed()
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'avatar'){
    client.commands.get('avatar').execute(message, args);

    } else if (command === 'avatar')
    
    {

    };
    
});


client.login(token);