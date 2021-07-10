 const  { Client, Collection } = require('discord.js');
const { PREFIX, TOKEN } = require('./config');
const bot = new Client({ disableMentions: 'everyone' });
const fs = require("fs");
const db = require('quick.db');
// inline replies..<!!>
const inlinereplies = require('discord-reply');

bot.on('message' async message => {
   if(db.has(`antilink_${message.guild.id}`)) {
if(message.content.match("https://") || message.content.match("discord.gg") || message.content.match("www.")) {
    message.delete();
    message.lineReply("`📛`No Lins are allowed, as Penn anti-link is enabled!").then(msg=>{
    let time = '4s'
    setTimeout(function(){
    msg.delete();
  }, ms(time));
});
   }
   }
});

//and that's it
