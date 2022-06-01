const { Client, version } = require('discord.js');
const { 
    token, 
    serverID, 
    roleID, 
    interval 
} = require('./config.json')
const bot = new Client();

bot.on("ready", async() => {
    console.log(`[ Client ] ${bot.user.tag} Is Now Online`);

    bot.user.setPresence({
        status: 'dnd',
        activity: {
            name: 'Rainbow Color',
            type: 'PLAYING',
        }
    })
})


bot.login(token)


