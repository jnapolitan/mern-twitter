const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mangoURI;
const port = process.env.PORT || 5000;
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const bodyParser = require('body-parser');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send('Hello again world!')
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api/tweets", tweets);