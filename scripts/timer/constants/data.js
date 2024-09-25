const {
  KZARKA_BOSS,
  KARANDA_BOSS,
  NOUVER_BOSS,
  OFFIN_BOSS,
  KUTUM_BOSS,
  QUIT_BOSS,
  VELL_BOSS,
  MURAKA_BOSS,
  BLACK_SHADOW_BOSS,
  TRIBUTE_WAGON_BOSS,
  CONQUEST_WARS_BOSS,
  GARMOTH_BOSS,
} = require("./bosses");
const { DAYS } = require("./days");

const BOSSES_DATA = [
  // TEMPLATE
  // { day: DAYS.Friday, hour: 0, minute: 15, bosses: [] },
  // { day: DAYS.Friday, hour: 2, minute: 0, bosses: [] },
  // { day: DAYS.Friday, hour: 5, minute: 0, bosses: [] },
  // { day: DAYS.Friday, hour: 9, minute: 0, bosses: [] },
  // { day: DAYS.Friday, hour: 12, minute: 0, bosses: [] },
  // { day: DAYS.Friday, hour: 16, minute: 0, bosses: [] },
  // { day: DAYS.Friday, hour: 17, minute: 0, bosses: [] },
  // { day: DAYS.Friday, hour: 18, minute: 0, bosses: [] },
  // { day: DAYS.Friday, hour: 19, minute: 0, bosses: [] },
  // { day: DAYS.Friday, hour: 20, minute: 15, bosses: [] },
  // { day: DAYS.Friday, hour: 22, minute: 15, bosses: [] },
  // { day: DAYS.Friday, hour: 23, minute: 15, bosses: [] },

  // SUNDAY
  { day: DAYS.Sunday, hour: 0, minute: 15, bosses: [KUTUM_BOSS,NOUVER_BOSS] },
  { day: DAYS.Sunday, hour: 2, minute: 0, bosses: [KZARKA_BOSS] },
  { day: DAYS.Sunday, hour: 5, minute: 0, bosses: [KUTUM_BOSS] },
  { day: DAYS.Sunday, hour: 9, minute: 0, bosses: [NOUVER_BOSS] },
  { day: DAYS.Sunday, hour: 12, minute: 0, bosses: [KZARKA_BOSS] },
  { day: DAYS.Sunday, hour: 16, minute: 0, bosses: [VELL_BOSS] },
  { day: DAYS.Sunday, hour: 19, minute: 0, bosses: [GARMOTH_BOSS] },
  { day: DAYS.Sunday, hour: 22, minute: 15, bosses: [KZARKA_BOSS,NOUVER_BOSS] },

  // MONDAY
  { day: DAYS.Monday, hour: 0, minute: 15, bosses: [KUTUM_BOSS,KARANDA_BOSS] },
  { day: DAYS.Monday, hour: 2, minute: 0, bosses: [KARANDA_BOSS] },
  { day: DAYS.Monday, hour: 5, minute: 0, bosses: [KZARKA_BOSS] },
  { day: DAYS.Monday, hour: 9, minute: 0, bosses: [KZARKA_BOSS] },
  { day: DAYS.Monday, hour: 12, minute: 0, bosses: [OFFIN_BOSS] },
  { day: DAYS.Monday, hour: 14, minute: 0, bosses: [GARMOTH_BOSS] },
  { day: DAYS.Monday, hour: 16, minute: 0, bosses: [KUTUM_BOSS] },
  { day: DAYS.Monday, hour: 19, minute: 0, bosses: [NOUVER_BOSS] },
  { day: DAYS.Monday, hour: 22, minute: 15, bosses: [KZARKA_BOSS] },
  { day: DAYS.Monday, hour: 23, minute: 15, bosses: [GARMOTH_BOSS] },

  // TUESDAY
  { day: DAYS.Tuesday, hour: 0, minute: 15, bosses: [KARANDA_BOSS] },
  { day: DAYS.Tuesday, hour: 2, minute: 0, bosses: [KUTUM_BOSS] },
  { day: DAYS.Tuesday, hour: 5, minute: 0, bosses: [KZARKA_BOSS] },
  { day: DAYS.Tuesday, hour: 9, minute: 0, bosses: [NOUVER_BOSS] },
  { day: DAYS.Tuesday, hour: 12, minute: 0, bosses: [KUTUM_BOSS] },
  { day: DAYS.Tuesday, hour: 14, minute: 0, bosses: [GARMOTH_BOSS] },
  { day: DAYS.Tuesday, hour: 16, minute: 0, bosses: [NOUVER_BOSS] },
  { day: DAYS.Tuesday, hour: 19, minute: 0, bosses: [KARANDA_BOSS] },
  { day: DAYS.Tuesday, hour: 22, minute: 15, bosses: [QUIT_BOSS,MURAKA_BOSS] },
  { day: DAYS.Tuesday, hour: 23, minute: 15, bosses: [GARMOTH_BOSS] },

  // WENDNESDAY
  { day: DAYS.Wendnesday, hour: 0, minute: 15, bosses: [KUTUM_BOSS, KZARKA_BOSS] },
  { day: DAYS.Wendnesday, hour: 2, minute: 0, bosses: [KARANDA_BOSS] },
  { day: DAYS.Wendnesday, hour: 5, minute: 0, bosses: [KZARKA_BOSS] },
  { day: DAYS.Wendnesday, hour: 9, minute: 0, bosses: [KARANDA_BOSS] },
  { day: DAYS.Wendnesday, hour: 12, minute: 0, bosses: [NOUVER_BOSS] },
  { day: DAYS.Wendnesday, hour: 14, minute: 0, bosses: [GARMOTH_BOSS] },
  { day: DAYS.Wendnesday, hour: 16, minute: 0, bosses: [KUTUM_BOSS,OFFIN_BOSS] },
  { day: DAYS.Wendnesday, hour: 19, minute: 0, bosses: [VELL_BOSS] },
  { day: DAYS.Wendnesday, hour: 22, minute: 15, bosses: [KARANDA_BOSS,KZARKA_BOSS] },
  { day: DAYS.Wendnesday, hour: 23, minute: 15, bosses: [GARMOTH_BOSS] },

  // THURSDAY
  { day: DAYS.Thurday, hour: 0, minute: 15, bosses: [NOUVER_BOSS] },
  { day: DAYS.Thurday, hour: 2, minute: 0, bosses: [KUTUM_BOSS] },
  { day: DAYS.Thurday, hour: 5, minute: 0, bosses: [NOUVER_BOSS] },
  { day: DAYS.Thurday, hour: 9, minute: 0, bosses: [KUTUM_BOSS] },
  { day: DAYS.Thurday, hour: 14, minute: 0, bosses: [GARMOTH_BOSS] },
  { day: DAYS.Thurday, hour: 16, minute: 0, bosses: [KZARKA_BOSS] },
  { day: DAYS.Thurday, hour: 19, minute: 0, bosses: [KUTUM_BOSS] },
  { day: DAYS.Thurday, hour: 22, minute: 15, bosses: [QUIT_BOSS,MURAKA_BOSS] },
  { day: DAYS.Thurday, hour: 23, minute: 15, bosses: [GARMOTH_BOSS] },

  // FRIDAY
  { day: DAYS.Friday, hour: 0, minute: 15, bosses: [KZARKA_BOSS,KARANDA_BOSS] },
  { day: DAYS.Friday, hour: 2, minute: 0, bosses: [NOUVER_BOSS] },
  { day: DAYS.Friday, hour: 5, minute: 0, bosses: [KARANDA_BOSS] },
  { day: DAYS.Friday, hour: 9, minute: 0, bosses: [KUTUM_BOSS] },
  { day: DAYS.Friday, hour: 12, minute: 0, bosses: [KARANDA_BOSS] },
  { day: DAYS.Friday, hour: 16, minute: 0, bosses: [NOUVER_BOSS] },
  { day: DAYS.Friday, hour: 19, minute: 0, bosses: [KZARKA_BOSS] },
  { day: DAYS.Friday, hour: 22, minute: 15, bosses: [KUTUM_BOSS,KZARKA_BOSS] },

  // SATURDAY
  { day: DAYS.Saturday, hour: 0, minute: 15, bosses: [KARANDA_BOSS] },
  { day: DAYS.Saturday, hour: 2, minute: 0, bosses: [OFFIN_BOSS] },
  { day: DAYS.Saturday, hour: 5, minute: 0, bosses: [NOUVER_BOSS] },
  { day: DAYS.Saturday, hour: 9, minute: 0, bosses: [KUTUM_BOSS] },
  { day: DAYS.Saturday, hour: 12, minute: 0, bosses: [NOUVER_BOSS] },
  { day: DAYS.Saturday, hour: 16, minute: 0, bosses: [QUIT_BOSS,MURAKA_BOSS] },
  { day: DAYS.Saturday, hour: 17, minute: 0, bosses: [BLACK_SHADOW_BOSS] },
  { day: DAYS.Saturday, hour: 18, minute: 0, bosses: [TRIBUTE_WAGON_BOSS] },
  { day: DAYS.Saturday, hour: 19, minute: 0, bosses: [KARANDA_BOSS] },
  { day: DAYS.Saturday, hour: 20, minute: 0, bosses: [CONQUEST_WARS_BOSS] },
];

exports.BOSSES_DATA = BOSSES_DATA;
