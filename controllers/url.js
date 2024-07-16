const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
  const body = req.url;
  const shortID = shortid();

  await URL.create({
    shortId: shortID,
    redirectURL: body,
  });
  return res.json({ id: shortID }); // Return response as JSON
}

module.exports = {
  handleGenerateNewShortURL,
};
