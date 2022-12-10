require("dotenv").config();
const Telegraf = require("telegraf");
const { BOT_TOKEN } = process.env;
const bot = new Telegraf(BOT_TOKEN);

bot.use(require("./composers/start.composer"));
bot.use(require("./composers/search.composer"));

bot
  .launch()
  .then((res) => {
    console.log("bot launched");
  })
  .catch((err) => {
    console.log("start error", err);
  });
