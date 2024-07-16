const { Client, GatewayIntentBits } = require("discord.js");
const { connectToMongoDB } = require("./connect");
const { handleGenerateNewShortURL } = require("./controllers/url");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

connectToMongoDB("mongodb://localhost:27017/discord-bot").then(() =>
  console.log("mongodb connected")
);

client.on("interactionCreate", (interaction) => {
  //console.log(interaction);
  interaction.reply("Pong!!");
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("create")) {
    const url = message.content.split("create ")[1];
    const shortUrl = handleGenerateNewShortURL(url);
    console.log(shortUrl);
    console.log("Generated short url", shortUrl);
    return message.reply({
      content: "Short url generated " + shortUrl,
    });
  }
  message.reply({
    content: "Hi from Bot",
  });
});

client.login(
  "MTI2MTQ0MTY2OTgzMjc2OTYyNg.GrQQZ2.SAaiJXtla7P5br2CIzqMVksxW19pwciTi2Ce18"
);
