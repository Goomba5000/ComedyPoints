const Discord = require("discord.js")
const client = new Discord.Client()
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})
client.on("message", message => {
    const filter = (reaction) => reaction.emoji.name === '🥇'
    message.awaitReactions(filter, { max: 3 })
        .then(collected => {
            // if (collected.first() != null)
            // {
            //     console.log(collected.first().emoji.name);
            //     if (collected.first().emoji.name === '🥇')
            //     {
            var range = 0;
            var prob = Math.floor(Math.random() * 12);
            if (prob == 11)
                range = 1000;
            else
                range = 50;
            message.reply(Math.floor(Math.random() * range) + " comedy points.");
            //     }
            // }
        });
})
client.login(process.env.BOT_TOKEN);
