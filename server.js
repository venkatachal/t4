const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/todolist', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, function() {
  console.log('Server listening on port ' + port);
});
