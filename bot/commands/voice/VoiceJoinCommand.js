/*const commando = require('discord.js-commando');
new Commando.ArgumentType(client,voice);

class VoiceJoinCommand extends commando.Command{
    constructor(client,voice){
        super(client, {
            name: 'join',
            group: 'voice',
            memberName:'join',
            description: 'Tritt einen Sprachchannel bei.'
        });
    }

    async run(message,args,guilds){//messsage, args
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
    }

}
module.exports = VoiceJoinCommand;
*/