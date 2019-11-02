const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const opn = require('opn');

function downloadSong(link){
    opn(link);
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

var prefix = "!"

client.on('message', msg => {

  if (msg.content === '!ping') {
    msg.reply('Pong!');
  }
  if (msg.content.startsWith('!addsong ') && msg.content.includes('https://beatsaver.com/beatmap/')){
      var songCode = msg.content.replace('!addsong https://beatsaver.com/beatmap/', '');
      downloadSong('beatsaver://' + songCode);
        return msg.reply('I have downloaded the song with code ' + songCode);

  }
  


});

var token = fs.readFileSync("./token.txt", "utf8");

client.login(token);