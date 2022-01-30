const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = [
    "Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});

app.get("/api/fortune", (req, res) => {
  const fortune = [
    "Your dreams will come true!",
    "Don't eat the shrimp!",
    "You will pass this test!",
    "You will meet the right dog for you!",
    "You will find the droid you are looking for!",
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune);
});

app.get("/api/joke", (req, res) => {
  const joke = [
    "1. What do you call a boomerang that wont come back? A stick.",
    "2. What does a cloud wear under his raincoat? Thunderwear.",
    "3. Two pickles fell out of a jar onto the floor. What did one say to the other? Dill with it.",
    "4. What time is it when the clock strikes 13? Time to get a new clock.",
    "5. How does a cucumber become a pickle? It goes through a jarring experience.",
  ];

  // choose random joke
  let randomIndex = Math.floor(Math.random() * joke.length);
  let randomJoke = joke[randomIndex];

  res.status(200).send(randomJoke);
});

app.get("/api/hello", (req, res) => {
  const hello = [
    "Marhaba",
    "Namaskar",
    "Hola",
    "Bonjour",
    "Hafa Adai",
    "Ni Hao",
  ];

  // choose random joke
  let randomIndex = Math.floor(Math.random() * hello.length);
  let randomHello = hello[randomIndex];

  res.status(200).send(randomHello);
});

app.get("/api/dog", (req, res) => {
  const dogs = [
    "Golden Retriever",
    "Boston Terrier",
    "English Mastiff",
    "South African Mastiff",
    "Pug",
    "Boxer",
    "Border Collie",
    "Greyhound",
    "Chow",
    "Pit Bull",
    "Cane Corso",
    "Presa Canario",
    "Dalmatian",
    "English Bulldog",
  ];

  // choose random joke
  let randomIndex = Math.floor(Math.random() * dogs.length);
  let randomDogs = dogs[randomIndex];

  res.status(200).send(randomDogs);
});

app.post("/api/name", (req, res) => {
  let names = [];

  names.push(data);

  console.log(names);

  res.status(200).send(names);
});

app.listen(4000, () => console.log("Server running on 4000"));
