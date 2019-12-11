const express = require("express");
const knex = require("./data/dbConfig");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("<h1>🏎🏎 <i>DB migrations<i> 🏎   🏎</h1>");
});
server.get("/cars", (req, res) => {
  knex("cars")
    .then(getCars => {
      res.status(200).json(getCars);
    })
    .catch(err => {
      res.status(500).json({ error: "failed to get cars" });
    });
});
server.post("/cars", (req, res) => {
  knex
    .insert(req.body)
    .into("cars")
    .then(obj => {
      res.status(200).json(obj);
    })
    .catch(err => {
      res.status(500).json({ error: "failed to insert car" });
    });
});
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
