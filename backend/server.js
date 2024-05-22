import express from "express";

const app = express();
app.use

app.get("/", (req, res) => {
  res.send("server is ready");
});

// get a list of 5 jokes

app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      "id": 11,
      "title": "Why don't some couples go to the gym?",
      "content": "Because some relationships don't work out!"
    },
    {
      "id": 12,
      "title": "What do you call cheese that isn't yours?",
      "content": "Nacho cheese!"
    },
    {
      "id": 13,
      "title": "Why don't skeletons fight each other?",
      "content": "They don't have the guts."
    },
    {
      "id": 14,
      "title": "What do you get when you cross a snowman and a vampire?",
      "content": "Frostbite!"
    },
    {
      "id": 15,
      "title": "Why couldn't the leopard play hide and seek?",
      "content": "Because he was always spotted."
    },
    {
      "id": 16,
      "title": "What do you call a bee that can't make up its mind?",
      "content": "A maybe."
    },
    {
      "id": 17,
      "title": "What did one hat say to the other hat?",
      "content": "You stay here, I'll go on ahead."
    },
    {
      "id": 18,
      "title": "Why was the math book sad?",
      "content": "Because it had too many problems."
    },
    {
      "id": 19,
      "title": "How does a penguin build its house?",
      "content": "Igloos it together."
    },
    {
      "id": 20,
      "title": "What did the janitor say when he jumped out of the closet?",
      "content": "Supplies!"
    }
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
