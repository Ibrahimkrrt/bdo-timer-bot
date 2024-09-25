const { BOSS_TIMER } = require("./constants/key-word");
const { BOSSES_DATA } = require("./constants/data");
const { BOSS_ENUM } = require("./constants/boss-enum");
const { getTimer, getNextBosses, generateText } = require("./timer");
const { KZARKA_BOSS, KARANDA_BOSS } = require("./constants/bosses");
const { DAYS } = require("./constants/days");

test("should have all the bosses", () => {
  const TEST_BOSSES = [
    BOSS_ENUM.Kzarka,
    BOSS_ENUM.Karanda,
    BOSS_ENUM.Kutum,
    BOSS_ENUM.Nouver,
    BOSS_ENUM.Offin,
    BOSS_ENUM.Quit,
    BOSS_ENUM.Vell,
    // BOSS_ENUM.BlackShadow,
    // BOSS_ENUM.TributeWagon,
    BOSS_ENUM.Garmoth,
    // BOSS_ENUM.ConquestWars,
    BOSS_ENUM.Muraka,
  ];
  let accumulator = {};
  const filterBossesId = BOSSES_DATA.reduce(
    (array, data) => (array = array.concat(data.bosses.map((boss) => boss.id))), // function to reduce
    [] // inital value of the array
  ).filter((id) => !(accumulator[id] = id in accumulator));
  expect(filterBossesId.length === TEST_BOSSES.length).toBeTruthy();
  for (const BOSS_ID of TEST_BOSSES) {
    expect(filterBossesId.find((id) => id === BOSS_ID)).toBeDefined();
  }
});

// =======================================

test("should reply when '!timer' string is typed", () => {
  expect(getTimer()).toBeTruthy();
});

// =======================================

test("should return next swapning bosses base on a date", () => {
  const TEST_DATE = new Date(2023, 0, 23, 18, 0);
  const EXPECTED_BOSSES_ID = BOSS_ENUM.Nouver; // Nouver spans at 19h00 on mondays

  const RESULT = getNextBosses(TEST_DATE);

  expect(
    RESULT.bosses.find((boss) => boss.id === EXPECTED_BOSSES_ID)
  ).toBeTruthy();
});

// =======================================

test("should return correct text when multiple bosses are spawninig", () => {
  const TEST_DATE = new Date(2023, 0, 23, 19, 0);
  const TEST_BOSS_SPAN = {
    day: DAYS.Monday,
    hour: 20,
    minute: 15,
    bosses: [KZARKA_BOSS, KARANDA_BOSS],
  };

  const HOURS = 1;
  const MINUTES = 15;
  const SECODNES = 0;
  const EXPECTED_RESULT = `**${KZARKA_BOSS.name}** and **${KARANDA_BOSS.name}** are spawning in **${HOURS}h ${MINUTES - 1}m ${60 - SECODNES}s**`;

  expect(generateText(TEST_DATE, TEST_BOSS_SPAN)).toEqual(EXPECTED_RESULT);
});

test("should return correct text when multiple one boss is spawninig", () => {
  const TEST_DATE = new Date(2023, 0, 23, 19, 0);
  const TEST_BOSS_SPAN = {
    day: DAYS.Monday,
    hour: 20,
    minute: 15,
    bosses: [KZARKA_BOSS],
  };

  const HOURS = 1;
  const MINUTES = 15;
  const SECODNES = 0;
  const EXPECTED_RESULT = `**${KZARKA_BOSS.name}** is spawning in **${HOURS}h ${MINUTES - 1}m ${60 - SECODNES}s**`;

  expect(generateText(TEST_DATE, TEST_BOSS_SPAN)).toEqual(EXPECTED_RESULT);
});
