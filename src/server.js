const http = require('http');
const htmlHandle = require('./htmlResponses.js');
const textHandle = require('./textResponses.js');
const jsonHandle = require('./jsonResponses.js');
const imageHandle = require('./imageResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);

  switch (request.url) {
    case '/':
      htmlHandle.getIndex(request, response);
      break;
    case '/page2':
      htmlHandle.getPage2(request, response);
      break;
    case '/hello':
      textHandle.getHello(request, response);
      break;
    case '/time':
      textHandle.getTime(request, response);
      break;
    case '/helloJSON':
      jsonHandle.getHelloJSON(request, response);
      break;
    case '/timeJSON':
      jsonHandle.getTimeJSON(request, response);
      break;
    case '/dankmemes':
      imageHandle.getDankmeme(request, response);
      break;
    default:
      htmlHandle.getIndex(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});
