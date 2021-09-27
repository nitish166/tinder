import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors";

// App config

const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://admin:SgSNuEgwsJAVvvPh@cluster0.v3ncw.mongodb.net/tinderdb?retryWrites=true&w=majority";

// Middleware

app.use(express.json());
app.use(Cors());

// DB config

mongoose.connect(
  connection_url,
  {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!!!");
  }
);

// API Endpoints

app.get("/", (req, res) => res.status(200).send("Hello clever programmer!!!"));

app.post("/tinder/card", (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// app.get("/tinder/cards", async (req, res) => {
//   try {
//     // Trying for getting the cards
//     const allCards = await Cards.find(); // Getting the cards
//     res.status(200).send(allCards); // Sending the cards
//   } catch (error) {
//     // Catching the error
//     res.status(500).send(error); // Sending the error
//   }
// });

// Listener

app.listen(port, () => console.log(`listening on localhost: ${port}`));
