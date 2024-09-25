const { Client, GatewayIntentBits } = require("discord.js");
const { bdoTimerReply } = require("./scripts/timer/timer");
const keep_alive = require("./keep_alive");
require("dotenv/config");

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

const wittyReplies = [
  "You look like you have more craters than the moon",
  "It would help if you were the poster child of a condom company",
  "You’re about as useful as the white crayon",
  "Did you use a mud puddle as a mirror this morning?",
  "Were you carrying an umbrella when God was giving out beauty?",
  "Explaining to you is like teaching calculus to a lemur",
  "If you ran like your mouth, maybe you’d win a gold medal",
  "You’re as sharp as a marble",
  "There’s some shit on your clothes. Oh, nope. That’s just you",
];

function getTimer(message) {
  const reply = bdoTimerReply();
  if (reply) {
    message.reply(reply);
  } else {
    message.reply(
      "I couldn't fetch the timer information. Please contact Zeone."
    );
  }
}

function getRandomReply() {
  const randomIndex = Math.floor(Math.random() * wittyReplies.length);
  return wittyReplies[randomIndex];
}
let i = 0;
client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  i++;
  const content = message.content.toLowerCase();

  const commands = {
    "!timer": () => getTimer(message),
    "!thankme": () => message.reply(getRandomReply()),
  };

  if (commands[content]) {
    commands[content]();
  }
});

client.login(process.env.TOKEN);
