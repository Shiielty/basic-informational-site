const http = require('http')
const fs = require('fs')

console.log("Listening to port 8080")
http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  // set routing
  let path = ''
  switch (req.url) {
    case '/':
      path = './index.html'
      res.statusCode = 200;
      break;
    // try to redirect to homepage
    case '/index':
      res.statusCode = 301;
      res.setHeader('Location', '/')
      res.end();
    case '/about':
      path = './about.html'
      res.statusCode = 200;
      break;
    case '/contact-me':
      path = './contact-me.html'
      res.statusCode = 200;
      break;
    default:
      path = './404.html'
      res.statusCode = 404;
      break;
  }

  // send html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end()
    } else {
      res.end(data);
    }
  })
}).listen(8080)