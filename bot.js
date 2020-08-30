const Discord = require("discord.js")
const client = new Discord.Client()
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})
client.on("message", message => {
    if (message.content === "!comedy") {
        message.reply(Math.floor(Math.random() * 1000) + " comedy points.");
    }

    const filter = (reaction) => reaction.emoji.name === '\:comedypoints:'
    message.awaitReactions(filter, { time: 5000})
        .then(collected => {
            if (collected.first().emoji.name == '\:comedypoints:')
                message.reply(Math.floor(Math.random() * 1000) + " comedy points.");
        });
})
client.login(process.env.BOT_TOKEN);
