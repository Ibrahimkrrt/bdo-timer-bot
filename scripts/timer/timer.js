const { BOSS_TIMER, THANK_ME } = require("./constants/key-word");
const { BOSSES_DATA } = require("./constants/data");

// =======================================

function bdoTimerReply() {
  let nextBosses = getNextBosses(new Date());
  return generateText(new Date(), nextBosses);
}

// =======================================

function getNextBosses(currentDate) {
  let nextBosses = BOSSES_DATA.find(
    (data) =>
      data.day === currentDate.getDay() &&
      data.hour * 60 + data.minute >=
        currentDate.getHours() * 60 + currentDate.getMinutes()
  );

  return nextBosses;
}

// =======================================

function generateText(date, data) {
  const HOURS = data.hour - 1 - date.getHours();
  const MINUTES = data.minute + 60 - date.getMinutes();
  const SECONDS = date.getSeconds();

  const totalSeconds = (HOURS * 60 + MINUTES) * 60 + SECONDS;

  const bossCount = data.bosses.length;
  let bossNames = "";

  if (bossCount === 1) {
    bossNames = data.bosses[0].name;
  } else if (bossCount === 2) {
    bossNames = `**${data.bosses[0].name}** and **${data.bosses[1].name}**`;
  } else if (bossCount > 2) {
    const allButLast = data.bosses
      .slice(0, -1)
      .map((boss) => `**${boss.name}**`)
      .join(", ");
    const lastBoss = data.bosses[bossCount - 1].name;
    bossNames = `${allButLast}, and **${lastBoss}**`;
  }

  const timeString = `${Math.floor(totalSeconds / 3600)}h ${
    Math.floor((totalSeconds % 3600) / 60) - 1
  }m ${60 - ((totalSeconds % 3600) % 60)}s`;

  const verb = bossCount > 1 ? "are" : "is";

  return `${bossNames} ${verb} spawning in **${timeString}**`;
}

exports.bdoTimerReply = bdoTimerReply;
exports.getNextBosses = getNextBosses;
exports.generateText = generateText;
