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

const db = require("../mongoDB");
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "Automatische Wiedergabe",
  description: "Aktivieren oder deaktivieren Sie die automatische Wiedergabe der Warteschlange.",
  options: [],
  permissions: "0x0000000000000800",
  run: async (client, interaction) => {
    try {
      const queue = client?.player?.getQueue(interaction?.guild?.id);
      if (!queue || !queue?.playing) {
        return interaction?.reply({ content: '⚠️ Derzeit wird keine Musik abgespielt!', ephemeral: true });
      }
      
      queue?.toggleAutoplay();
      
      const embed = new EmbedBuilder()
        .setColor('#2f58fe')
        .setTitle('Deine Musik, deine Entscheidung!!!')
        .setDescription(queue?.autoplay ? '**✅ Automatische Wiedergabe aktiviert**' : '**❌ Automatische Wiedergabe deaktiviert**')
        
      
      interaction?.reply({ embeds: [embed] });
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
