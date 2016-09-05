var express = require('express'),
    app     = express();

var debug = require('debug')('::http');

const HOST = process.env.host || '0.0.0.0';
const PORT = process.env.port || 3000;

app.listen(PORT, function() {
  debug("App is listening on Port %s", PORT);
});