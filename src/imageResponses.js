const fs = require('fs');

const dankmemes = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getDankmeme = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/x-png' });
  response.write(dankmemes);
  response.end();
};

module.exports.getDankmeme = getDankmeme;
