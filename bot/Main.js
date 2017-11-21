//const Discord = require('discord.js');
//const client = new Discord.Client();
const commando = require('discord.js-commando');
const client = new commando.Client();
//const path = require('path');


var token = "MzgyNTY0OTI5MzQyOTMwOTQ0.DPXmbw.ABiNPumEyJEnScED4u29BlXKlco";
var token2 = "MzgyNTY1MTA0MTE1MjUzMjU4.DPXmjg.nRRpSe0KgFtHmkmIdxtvvA3B68U";
var gameName = "PC";

var useBot=2;



client.registry.registerGroup('random','Random');
client.registry.registerGroup('random','Random');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands");

/*
client.registry.registerGroup('voice','Voice');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands");
*/

if(useBot==1){
  client.login(token);
}else if(useBot==2){
  client.login(token2);
}


client.on('ready', () => {
    console.log('Ready!');

    client.user.setStatus('Online');
    client.user.setGame("Bot "+useBot+": "+gameName);
});

client.on('message', msg => {
    console.log("msg: "+msg.content);
    if (msg.content === 'hi') {
      msg.reply('Hallo');
    }
  });

/*
client.on('message', msg => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!msg.guild) return;
  
    if (msg.content == '/join') {
      if (msg.member.voiceChannel) {
        msg.member.voiceChannel.join()
          .then(connection => { // Connection is an instance of VoiceConnection
            message.reply('Verbindung Erfolgreich!');
          })
          .catch(console.log);
      } else {
        message.reply('Du bist in keinen Sprachkanal!');
      }
    }
  });
*/