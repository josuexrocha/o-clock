// on veut jouer avec des dates et des fuseaux horaires: dayjs et les plugins qui vont bien.
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
// https://day.js.org/docs/en/plugin/timezone
const timezone = require("dayjs/plugin/timezone");
const advancedFormat = require("dayjs/plugin/advancedFormat");

require("dayjs/locale/fr");

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);
dayjs.locale("fr");

// renvoie la date sous un fuseau spécifique
function getCurrentDate(tz) {
  const time = dayjs().tz(tz);
  return time.format("dddd Do MMMM");
}

// renvoie l'heure sous un fuseau spécifique
function getCurrentTime(tz) {
  const time = dayjs().tz(tz);
  return time.format("HH:mm:ss");
}

// on rend nos 2 fonction accessibles depuis l'extérieur de notre module
module.exports = {
  getCurrentDate,
  getCurrentTime,
};
