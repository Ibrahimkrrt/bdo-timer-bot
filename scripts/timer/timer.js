const { getDay } = require("./constants/days");
const { BOSSES_DATA } = require("./constants/data");

//#region get current timer

function getTimer() {
  try {
    const TODAY = new Date()
    return generateText(TODAY, getNextBosses(TODAY))
  } catch (error) {
    return "I couldn't fetch the timer information. Please contact Zeone."
  }
}

// =======================================

function getNextBosses(currentDate) {
  let nextBosses = BOSSES_DATA.find(
    (data) =>
      data.day === currentDate.getDay() &&
      data.hour * 60 + data.minute >= currentDate.getHours() * 60 + currentDate.getMinutes()
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
    bossNames = `**${data.bosses[0].name}**`;
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

//#endregion

//#region all bosses

function formatTime(hour, minute) {
  const h = hour > 9 ? hour : `0${hour}`;
  const m = minute > 9 ? minute : `0${minute}`;
  return `${h}:${m}`;
}

function bossesGroupedByDay() {
  const days = {};
  const currentBoss = getNextBosses(new Date())
  const currentBossIndex = BOSSES_DATA.indexOf(currentBoss)

  console.log(currentBossIndex);
  

  BOSSES_DATA.forEach((entry,index) => {
    const time = formatTime(entry.hour, entry.minute);
    if (!days[entry.day]) {
      days[entry.day] = [];
    }
    entry.bosses.forEach(boss => {
      days[entry.day].push({ boss: boss, time, isImminent : currentBossIndex === index });
    });
  });

  return days;
}

function getAllBosses() {
  
  let messageArray = [];
  const groupedBosses = bossesGroupedByDay()

  for (const [day, bosses] of Object.entries(groupedBosses)) {
    let message = `${getDay(day)}:\n\nBoss Name               | Spawn Time\n------------------------|------------\n`;
    bosses.forEach(entity => {
      message += `${entity.isImminent ? '+> ' : '   '}${entity.boss.name.padEnd(20)} | ${entity.time}\n`;
    });
    messageArray.push("```diff\n" + message + "\n```")
  }

  return messageArray;
}

//#endregion

exports.getTimer = getTimer;
exports.getNextBosses = getNextBosses;
exports.getAllBosses = getAllBosses;
exports.generateText = generateText;
