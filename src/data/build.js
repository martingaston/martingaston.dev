const { formatISO } = require("date-fns");

module.exports = {
  timestamp: formatISO(new Date()),
};
