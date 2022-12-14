const express = require("express");
const Food = require("./src/Models/food");
const cors = require("cors");
const connect = require("./src/Configs/db");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.post("/", async (req, res) => {
  try {
    const item = await Food.create(req.body);
    return res.status(200).send(item);
  } catch (er) {
    return res.status(500).send(er.message);
  }
});

app.get("/", async (req, res) => {
  try {
    const items = await Food.find().lean().exec();
    return res.status(201).send(items);
  } catch (er) {
    return res.status(500).send(er.message);
  }
});

app.get("/:id", async (req, res) => {
  try {
    // console.log(req.params.id)
    const item = await Food.findById(req.params.id);
    return res.status(201).send(item);
  } catch (er) {
    return res.status(500).send(er.message);
  }
});

app;
app.listen(PORT, async () => {
  try {
    await connect();
    console.log("listening port 8080");
  } catch (error) {
    console.log(error);
  }
});
