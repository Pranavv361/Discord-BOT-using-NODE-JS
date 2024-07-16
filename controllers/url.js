const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewShortURL(url) {
  const shortID = shortid.generate();

  await URL.create({
    shortId: shortID,
    redirectURL: url,
  });
  return shortID; // Return response as JSON
}

async function handleRedirectShortURL(req, res) {
  const shortId = req.params.shortId;

  try {
    // Find the URL entry in MongoDB based on short ID
    const urlEntry = await URL.findOne({ shortId });

    if (!urlEntry) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    // Redirect to the stored URL
    res.redirect(urlEntry.redirectURL);
  } catch (error) {
    console.error("Error redirecting short URL:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  handleGenerateNewShortURL,
  handleRedirectShortURL,
};
