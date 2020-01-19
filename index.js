const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjY4MTE1MzEwNjk1NDE1ODM4.XiMnbA.Ii5wEloRcK_B27zBCC7NEo8uyL8';

const PREFIX = '!';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split("!");

    switch(args[0]){
        case 'ping':
            message.channel.sendMessage('pong!')
            break;
        case 'help':
            message.channel.sendMessage('mods some needs your help')
            break;    
    }
})

bot.login(token);
