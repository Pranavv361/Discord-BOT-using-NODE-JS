# Discord Bot

This Discord bot allows users to generate short URLs for any given link and interact with various commands. The bot uses MongoDB for storing the short URLs and Express for handling HTTP requests.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Setup and Installation](#setup-and-installation)
3. [Creating a Discord Bot](#creating-a-discord-bot)
4. [Configuring the Bot](#configuring-the-bot)
5. [Intents and Permissions](#intents-and-permissions)
6. [Running the Bot](#running-the-bot)
7. [Documentation](#documentation)

## Project Structure
- **controllers/url.js**: Contains the logic for generating and retrieving short URLs.
- **models/url.js**: Defines the MongoDB schema for URL storage.
- **routes/url.js**: Sets up the Express route for URL-related operations.
- **command.js**: Registers bot commands.
- **connect.js**: Handles the MongoDB connection.
- **index.js**: Main entry point of the application, sets up the Discord client and Express server.

## Setup and Installation

1. **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd discord-bot
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the following:

    ```plaintext
    DISCORD_TOKEN=your-discord-token
    MONGO_URL=mongodb://localhost:27017/discord-bot
    ```

## Creating a Discord Bot

1. **Go to the Discord Developer Portal:**

    [Discord Developer Portal](https://discord.com/developers/applications)

2. **Create a New Application:**

    Click on "New Application", give it a name, and click "Create".

3. **Create a Bot:**

    - Navigate to the "Bot" section on the left sidebar.
    - Click "Add Bot" and confirm by clicking "Yes, do it!".

4. **Get Client ID and Token:**

    - In the "General Information" section, you’ll find the Client ID.
    - In the "Bot" section, you can copy the token by clicking on "Copy" under the token section. **Keep this token secure!**

5. **Enable Message Content Intent:**

    - In the "Bot" section, scroll down to "Privileged Gateway Intents".
    - Enable "Message Content Intent".

6. **Bot Permissions:**

    - Ensure your bot has the necessary permissions. You can set permissions in the "OAuth2" section under "OAuth2 URL Generator".
    - Select "bot" under "SCOPES" and then select the necessary permissions under "BOT PERMISSIONS".

## Configuring the Bot

1. **Intents:**

    Intents are a way for Discord to send you events you are interested in. They help reduce the amount of data sent to you and improve security.

    For more details, check the [Discord Gateway Intents Documentation](https://discord.com/developers/docs/topics/gateway#list-of-intents).

    In your bot, we use the following intents:

    ```javascript
    const client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
      ],
    });
    ```

2. **Why Intents are Required:**

    Intents help specify which events the bot will receive from Discord, ensuring it only gets relevant data. This helps in optimizing performance and security.

## Running the Bot

1. **Start the bot:**

    ```bash
    npm start
    ```

2. **Interact with the bot:**

    - Use `create <url>` command in Discord to generate a short URL.
    - Visit `http://localhost:8000/<shortId>` to be redirected to the original URL.

## Documentation

For detailed documentation on the Discord.js library, visit [Discord.js Documentation](https://discord.js.org/docs/packages/discord.js/main).

---

### Summary of Gateway Intents

Intents are used to specify the events your bot is interested in receiving from the Discord API. This helps in optimizing the data your bot receives and improves performance. Here's a list of intents and their descriptions:

- **GUILDS**: Events related to guilds (servers) like guild creation, deletion, and updates.
- **GUILD_MEMBERS**: Events related to guild members like member join, leave, and updates.
- **GUILD_BANS**: Events related to guild bans like banning and unbanning members.
- **GUILD_EMOJIS_AND_STICKERS**: Events related to emojis and stickers in guilds.
- **GUILD_INTEGRATIONS**: Events related to guild integrations.
- **GUILD_WEBHOOKS**: Events related to guild webhooks.
- **GUILD_INVITES**: Events related to guild invites.
- **GUILD_VOICE_STATES**: Events related to voice state updates in guilds.
- **GUILD_PRESENCES**: Events related to guild member presence updates.
- **GUILD_MESSAGES**: Events related to messages in guilds.
- **GUILD_MESSAGE_REACTIONS**: Events related to message reactions in guilds.
- **GUILD_MESSAGE_TYPING**: Events related to typing indicators in guilds.
- **DIRECT_MESSAGES**: Events related to direct messages.
- **DIRECT_MESSAGE_REACTIONS**: Events related to direct message reactions.
- **DIRECT_MESSAGE_TYPING**: Events related to typing indicators in direct messages.
- **MESSAGE_CONTENT**: Events related to message content.

For a full list and more details, refer to the [Gateway Intents Documentation](https://discord.com/developers/docs/topics/gateway#list-of-intents).

---
