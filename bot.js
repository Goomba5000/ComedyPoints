const Discord = require("discord.js")
const client = new Discord.Client()
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on("message", msg => {
  if (msg.content === "!ping") {
    msg.reply("Pong!")
  }
})
client.login("NzQ5Mzg2MDYxMTY3MTk4MzM4.X0rOJw.G-4K9t_jh5balbqx_t1itGxRtns");
