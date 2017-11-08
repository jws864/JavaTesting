const http = require('http');//looks for java script modual 

const port = 8888;

const app = new http.Server();

app.on('request', (req, res) => {//on is to say when get an event of this type respond like this
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello World');
  res.end('\n');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});