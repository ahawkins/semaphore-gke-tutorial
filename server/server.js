let express = require('express');
let redis = require('redis');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.set('redis', redis.createClient({
  url: process.env.REDIS_URL
}));

app.get('/', function (req, res) {
  let client = app.get('redis');

  client.get('counter', function(err, result) {
    if(err) {
      res.status(500).send(err);
    } else {
      res.send(result + "\n");
    }
  });
});

app.post('/', function (req, res) {
  let client = app.get('redis');

  client.incrby('counter', req.body.n, function(err, result) {
    if(err) {
      res.status(500).send(err);
    } else {
      res.status(204).end();
    }
  });
});

app.get('/ping', function (req, res) {
  let client = app.get('redis');

  client.ping(function(err, result) {
    if(err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("OK\n");
    }
  });
});

app.listen(8080, function () {
	console.log('Server running on port 8080!');
});
