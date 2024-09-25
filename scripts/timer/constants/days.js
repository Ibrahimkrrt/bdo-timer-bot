const moment = require('moment-timezone');

const DAYS = {
  Monday: 1,
  Tuesday: 2,
  Wendnesday: 3,
  Thurday: 4,
  Friday: 5,
  Saturday: 6,
  Sunday: 0,
};
const DAYS_OF_THE_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getDay(dayNumber) {
  return DAYS_OF_THE_WEEK[dayNumber];
}


function getUTCDate(){
  var a = moment().utc().toDate()
  console.log(a );
  
  return a 
}

exports.DAYS = DAYS;
exports.getDay = getDay;
exports.getUTCDate = getUTCDate;
