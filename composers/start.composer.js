const { Composer } = require("telegraf");
const composer = new Composer();

composer.start(async (ctx) => {
  try {
    await ctx.replyWithMarkdown(`Hello, ${ctx.from.first_name}
This is images inline-bot
Just type in any chat @mypicture_searcher_bot (https://t.me/mypicture_searcher_bot) <image-name>
and you will receive some images for your query`);
  } catch (e) {
    console.error(e);
  }
});

module.exports = composer;
