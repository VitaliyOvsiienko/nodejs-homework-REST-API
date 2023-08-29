const register = require("./signin");
const login = require("./login");
const logout = require("./logout");
const current = require("./getCurrent");
const updateSubscription = require("./updateSubscription");

module.exports = {
  register,
  login,
  logout,
  current,
  updateSubscription,
};
