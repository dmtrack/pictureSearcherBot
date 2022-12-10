const axios = require("axios");
const BASE_URL = "https://api.unsplash.com/search/photos";

module.exports = async (q) => {
  try {
    return await axios.get(`${BASE_URL}`, {
      params: {
        client_id: process.env.API_KEY,
        query: q,
        per_page: 100,
        page: 1,
      },
    });
  } catch (e) {
    console.log(e, "search-request error");
  }
};
