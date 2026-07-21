const fs = require('fs');
const path = require('path');

module.exports = function handler(req, res) {
  try {
    const encodedPath = path.join(process.cwd(), 'images', 'hero-approved.b64');
    const encoded = fs.readFileSync(encodedPath, 'utf8').trim();
    const image = Buffer.from(encoded, 'base64');

    res.setHeader('Content-Type', 'image/webp');
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.status(200).send(image);
  } catch (error) {
    res.status(500).send('Hero image unavailable');
  }
};
