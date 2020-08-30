const Discord = require("discord.js")
const client = new Discord.Client()
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})
client.on("message", message => {
    const filter = (reaction) => reaction.emoji.name === '<:comedypoints:749418900231553044>'
    message.awaitReactions(filter, { max: 1 })
        .then(collected => {
            if (collected.first() != null)
            {
                if (collected.first().emoji.name === '<:comedypoints:749418900231553044>')
                    message.reply(Math.floor(Math.random() * 70) + " comedy points.");
            }
        });
})
client.login(process.env.BOT_TOKEN);
