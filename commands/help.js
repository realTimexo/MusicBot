/*

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   
   # MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE
   ## FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/FUEHs7RCqz ]
   ## YT : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
*/
const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');

module.exports = {
  name: "help",
  description: "Get information about bot and commands.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const musicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('🎸 **Muzik komutları**')
        .addFields(
          { name: '🎹 Oynat', value: 'Verilen bir bağlantıdan veya kaynaklardan gelen bir metinden şarkı akışı' },
          { name: '⏹️ Dur', value: 'Botun müzik çalmayı durdurmasını ve sesi bırakmasını sağlar' },
          { name: '📊 Akış', value: 'Bu sunucunun şarkı kuyruğunu görüntüleme ve yönetme' },
          { name: '⏭️ Atla', value: 'Bir sonraki şarkıya geçer' },
          { name: '⏸️ duraklama', value: 'Çalmakta olan şarkıyı duraklatır' },
          { name: '▶️ Devam', value: 'Duraklatılan geçerli şarkıyı sürdürür' },
          { name: '🔁 Tekrarlama', value: 'Kuyruk ve geçerli şarkı için döngü modunu değiştirir' },
          { name: '🔄 Otomatik oynatma', value: 'Otomatik oynatmayı etkinleştirme veya devre dışı bırakma [rastgele şarkı çalar]' },
          { name: '⏩ Arayın', value: 'Geçerli şarkıda belirli bir zamana kadar arama' },
          { name: '⏮️ Önceki', value: 'Kuyruktaki bir önceki şarkıyı çalar' },
          { name: '🔀 Karıştır', value: 'Kuyruktaki şarkıları karıştırın' }
        )
        .setImage(`https://cdn.discordapp.com/attachments/1004341381784944703/1165201249331855380/RainbowLine.gif?ex=654f37ba&is=653cc2ba&hm=648a2e070fab36155f4171962e9c3bcef94857aca3987a181634837231500177&`); 

      const basicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('✨ **Temel komutlar**')
        .addFields(
          { name: '🏓 Ping', value: "Botun pingini kontrol eder" },
          { name: '🗑️ Temizle', value: 'Bu sunucunun şarkı kuyruğunu temizleyin' },
          { name: '⏱️ Zaman', value: 'Geçerli şarkı çalma süresini görüntüleme' },
          { name: '🎧 Filtre', value: 'Sesi istediğiniz gibi geliştirmek için filtreler uygulayın' },
           { name: '🎵 Şimdi Çalan', value: 'Çalmakta olan şarkı bilgilerini görüntüler' },
          { name: '🔊 Ses', value: 'Müzik ses seviyesini ayarlayın [ yüksek ses seviyelerinde işitme risklidir ]' },
        ) 
       .setImage('https://cdn.discordapp.com/attachments/1150827819547504741/1168917372267151370/standard.gif?ex=65538222&is=65410d22&hm=b4994392f44679da41fc9304eb69deaa3769e136057556deec0db69ae8d33a97&')
      const button1 = new ButtonBuilder()
        .setLabel('YouTube')
        .setURL('https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A')
        .setStyle(ButtonStyle.Link);

      const button2 = new ButtonBuilder()
        .setLabel('Discord')
        .setURL('https://discord.gg/FUEHs7RCqz')
        .setStyle(ButtonStyle.Link);

      const button3 = new ButtonBuilder()
        .setLabel('Code')
        .setURL('https://replit.com/@BEASTGAMERS1?tab=community')
        .setStyle(ButtonStyle.Link);

      const row = new ActionRowBuilder()
        .addComponents(button1, button2, button3);

      interaction.reply({
        embeds: [musicCommandsEmbed, basicCommandsEmbed],
        components: [row]
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

   
   # MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE
   ## FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/FUEHs7RCqz ]
   ## YT : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
*/
