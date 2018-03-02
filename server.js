
const path = require('path');

// const fs
// const mongoose = require('mongoose');
// const morgan

const express = require('express');
const bodyParser = require('body-parser');
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(path.join(__dirname, 'client/public')));


app.use('/', routes);

//SQL sequelize ???

// mongoose.Promise = Promise;
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/<-- DB NAME -->";
// mongoose.connect(MONGODB_URI, {
//   useMongoClient: true
// });

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
