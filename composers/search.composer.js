const { Composer } = require("telegraf");
const composer = new Composer();
const searchImage = require("../handlers/searchImages");

composer.on("inline_query", async (ctx) => {
  if (!ctx.inlineQuery.query) return;
  const result = await searchImage(ctx.inlineQuery.query);
  const data = result.data.results.map((elem) => {
    return {
      type: "photo",
      id: elem.id,
      photo_url: elem.urls.full,
      thumb_url: elem.urls.thumb,
      title: elem.alt_description || "",
      description: elem.description || "",
      reply_markup: {
        inline_keyboard: [
          [{ text: `${elem.likes} ♥`, url: elem.urls.full }],
          [
            {
              text: "Share bot with friends",
              switch_inline_query: `${ctx.inlineQuery.query}`,
            },
          ],
        ],
      },
    };
  });
  console.log(data);
  setTimeout(() => {
    ctx.answerInlineQuery(data);
  }, 1000);
});
module.exports = composer;
