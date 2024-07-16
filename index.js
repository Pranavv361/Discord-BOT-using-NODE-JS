const express = require("express");
const { Client, GatewayIntentBits } = require("discord.js");
const { connectToMongoDB } = require("./connect");
const {
  handleGenerateNewShortURL,
  handleRedirectShortURL,
} = require("./controllers/url");
const urlRoute = require("./routes/url");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const app = express();
const port = 8000;

connectToMongoDB("mongodb://localhost:27017/discord-bot").then(() =>
  console.log("mongodb connected")
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/url", urlRoute);
app.get("/:shortId", handleRedirectShortURL);

client.on("interactionCreate", (interaction) => {
  //console.log(interaction);
  interaction.reply("Pong!!");
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("create")) {
    const url = message.content.split("create ")[1];
    try {
      const shortUrl = await handleGenerateNewShortURL(url);
      //console.log("Generated short url", shortUrl);
      return message.reply({
        content: "Short url generated: " + shortUrl,
      });
    } catch (error) {
      console.error("Error generating short url", error);
      return message.reply({
        content: "There was an error generating the short URL.",
      }); // return error message if URL generation fails.
    }
  } else {
    message.reply({
      content: "Hi from Bot",
    });
  }
});

client.login(
  //Replace the text with your token from Discord
  "MTI2MTQ0MTY2OTgzMjc2OTYyNg.GrQQZ2.SAaiJXtla7P5br2CIzqMVksxW19pwciTi2Ce18"
);

app.listen(port, () => console.log(`Server started at port:${port}`));
