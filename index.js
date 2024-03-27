const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/admin")
  .then(() => console.log(`connected locally to mongodb`))
  .catch((e) => console.error(e));
app.listen(port, () => console.log(`Listening on PORT:${port}`));

app.get("/test/:id", (req, res) => {
  res.send({
    params: req.params,
    body: req.body,
    query: req.query,
  });
});
const tennantsRouter = require("./router/tennant.router");
app.use("/tennants/", tennantsRouter);
