const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();

app.get("/users", (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
