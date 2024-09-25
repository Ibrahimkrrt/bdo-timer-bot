const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");
const { getTimer, getAllBosses } = require("./scripts/timer/timer");
const { MOTIVATION_ARRAY, CODING_MOTIVATION_ARRAY } = require("./scripts/motivation/constants/motivation-lines");

require("dotenv/config");
const keep_alive = require("./keep_alive");

const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: ["CHANNEL"],
});

client.on("ready", () => {
  console.log("====================================");
  console.log("Bot is ready");
  console.log("====================================");
});

function getRandomReply(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return `${list[randomIndex]}`;
}

function reply(message, string) {
  message.reply(string);
}

function ttsReply(message, string) {
  message.reply({
    tts: true,
    ephemeral: true,
    content: string,
  });
}

function replyMultiple(message, stringArray) {
  stringArray.forEach((line) => {
    message.reply(line);
  });
}

client.on("messageCreate", (message) => {
  try {
    if (message.author.bot) return;

    const content = message.content.toLowerCase();

    const commands = {
      "!timer": () => reply(message, getTimer()),
      "!motivateme": () => ttsReply(message, getRandomReply(MOTIVATION_ARRAY)),
      "!allbosses": () => replyMultiple(message, getAllBosses()),
    };

    if (commands[content]) {
      commands[content]();
    }
  } catch (error) {
    let compliment = "```md\n> "+getRandomReply(CODING_MOTIVATION_ARRAY)+"\n```"
    message.channel.send(`someone should tell to Zeone that there is a problem in his code, cheer him up with this small wishfull thinking :${compliment}`)
  }
});

client.login(process.env.TOKEN);
