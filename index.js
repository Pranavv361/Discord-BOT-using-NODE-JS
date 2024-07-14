const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("interactionCreate", (interaction) => {
  console.log(interaction);
  interaction.reply("Pong!!");
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("create")) {
    const url = message.content.split("create ")[1];
    return message.reply({
      content: "Generating Short ID for " + url,
    });
  }
  message.reply({
    content: "Hi from Bot",
  });
});

client.login(
  "MTI2MTQ0MTY2OTgzMjc2OTYyNg.GrQQZ2.SAaiJXtla7P5br2CIzqMVksxW19pwciTi2Ce18"
);
