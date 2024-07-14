const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];

const rest = new REST({ version: "10" }).setToken(
  "MTI2MTQ0MTY2OTgzMjc2OTYyNg.GrQQZ2.SAaiJXtla7P5br2CIzqMVksxW19pwciTi2Ce18"
);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands("1261441669832769626"), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
