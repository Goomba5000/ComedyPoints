const Discord = require("discord.js")
const client = new Discord.Client()
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})
client.on("message", message => {
    const react = client.emojis.find(emoji => emoji.name === "testimage");
    const filter = (reaction) => reaction.emoji.tag === "749496316685582366"
    message.awaitReactions(filter, { max: 1 })
        .then(collected => {
            if (collected.first() != null)
            {
                console.log(collected.first().emoji.name);
                if (collected.first().emoji.tag === "749496316685582366")
                {
                    message.reply(Math.floor(Math.random() * 70) + " comedy points.");
                }
            }
        });
})
client.login(process.env.BOT_TOKEN);
