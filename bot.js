const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`test Bot- Script By : Drakz_z`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Drakz_z ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`حبايب بانكد`,"http://twitch.tv/Panqd")
client.user.setStatus("dnd")
});



client.login("NjkwNDg5MzAwNDcwNDY0NTIy.XnSKhg.lxLUZLZaxd9DIC8nY0uM9x-dCqI");