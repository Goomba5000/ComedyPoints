const Discord = require("discord.js")
const client = new Discord.Client()
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})
client.on("message", message => {
    const filter = (reaction) => reaction.emoji.name === '🥇'
    message.awaitReactions(filter, { max: 7 })
        .then(collected => {
            var range = 0;
            var prob = Math.floor(Math.random() * 12);
            if (prob == 11)
                range = 1000;
            else if (prob == 1)
                range = 5;
            else
                range = 50;
            if (collected.first().emoji.name == '🥇')
                message.reply(Math.floor(Math.random() * range) + " comedy points.");
        });
})
client.login(process.env.BOT_TOKEN);
