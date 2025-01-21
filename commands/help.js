/*

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   
   # ERSTELLT VON RTX!! KANN FREI VERWENDET WERDEN
   ## FÜR HILFE KONTAKTIERE MICH AUF DISCORD
   ## Kontakt    [ DISCORD SERVER :  https://discord.gg/FUEHs7RCqz ]
   ## YT : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
*/

const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

const { EmbedBuilder, ActionRowBuilder } = require('discord.js');

module.exports = {
  name: "hilfe",
  description: "Erhalte Informationen über den Bot und die Befehle.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const musikBefehleEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('🎸 **Musikbefehle**')
        .addFields(
          { name: '🎹 Play', value: 'Spielt ein Lied von einem Link oder einer Textquelle ab' },
          { name: '⏹️ Stop', value: 'Beendet die Musikwiedergabe und verlässt den Sprachkanal' },
          { name: '📊 Quenue', value: 'Zeigt und verwaltet die Song-Warteschlange für diesen Server' },
          { name: '⏭️ Skip', value: 'Springt zum nächsten Song in der Warteschlange' },
          { name: '⏸️ Pause', value: 'Pausiert das aktuell abgespielte Lied' },
          { name: '▶️ Resume', value: 'Setzt das pausierte Lied fort' },
          { name: '🔁 Loop', value: 'Schaltet den Wiederholungsmodus für Warteschlange oder aktuelles Lied um' },
          { name: '🔄 Autoplay', value: 'Aktiviert oder deaktiviert die automatische Wiedergabe [spielt zufällige Songs ab]' },
          { name: '⏩ Suchen', value: 'Springt zu einem bestimmten Zeitpunkt im aktuellen Lied' },
          { name: '⏮️ Previous', value: 'Spielt den vorherigen Song in der Warteschlange' },
          { name: '🔀 Shuffle', value: 'Mischt die Songs in der Warteschlange' }
        )
        .setImage('https://cdn.discordapp.com/attachments/1004341381784944703/1165201249331855380/RainbowLine.gif?ex=654f37ba&is=653cc2ba&hm=648a2e070fab36155f4171962e9c3bcef94857aca3987a181634837231500177&'); 

      const basisBefehleEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('✨ **Grundlegende Befehle**')
        .addFields(
          { name: '🏓 Ping', value: "Überprüft die Latenz des Bots" },
          { name: '🗑️ Clear', value: 'Löscht die Warteschlange für diesen Server' },
          { name: '⏱️ Time', value: 'Zeigt die aktuelle Wiedergabezeit des Songs an' },
          { name: '🎧 Filter', value: 'Wendet Filter an, um den Ton nach Wunsch anzupassen' },
          { name: '🎵 Now playing', value: 'Zeigt Informationen über den aktuellen Song' },
          { name: '🔊 Volume', value: 'Passt die Lautstärke der Musik an [Vorsicht bei hoher Lautstärke]' }
        )
        .setImage('https://cdn.discordapp.com/attachments/1225110305739374648/1331276672783093882/InShot_20250121_155759922.jpg?ex=67910784&is=678fb604&hm=a7c7a74848466ed14ba464a3625f9fcdcafec395ae6f21b9a3ba58454adcb8b7&');

      interaction.reply({
        embeds: [musikBefehleEmbed, basisBefehleEmbed]
      }).catch(e => {});
    } catch (e) {
      console.error(e);
    }
  },
};

/*

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   
   # ERSTELLT VON RTX!! KANN FREI VERWENDET WERDEN
   ## FÜR HILFE KONTAKTIERE MICH AUF DISCORD
   ## Kontakt    [ DISCORD SERVER :  https://discord.gg/FUEHs7RCqz ]
   ## YT : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
*/
