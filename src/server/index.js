const express = require("express");
const items = require("./items");

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static("dist"));

app.get("/api/items", (req, res) => res.send({ items }));

// SEARCH ITEMS
app.get("/api/items/:searchQuery", (req, res) => {
  const { searchQuery } = req.params;

  const searchResult = items.filter((item) =>
    Object.values(item).some((itemToSearch) =>
      itemToSearch.toString().toLowerCase().includes(searchQuery)
    )
  );
  res.send({ result: searchResult });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
