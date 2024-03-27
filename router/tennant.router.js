const express = require("express");
const router = express.Router();
const TennantSchema = require("../schema/tennants.schema.js");

router.get("/", async (req, res) => {
  const tennants = await TennantSchema.find({}, { __v: 0 });
  res.send({
    msg: "all tennants",
    tennants,
  });
});
router.get("/:id", async (req, res) => {
  const tennant = await TennantSchema.findById(req.params.id, { __v: 0 });
  res.send({
    msg: "the tennant you are looking for",
    tennant,
  });
});
router.post("/", async (req, res) => {
  const result = await TennantSchema.create(req.body);
  res.send({
    msg: "tennant is created",
    result,
  });
});
router.patch("/:id", async (req, res) => {
  const result = await TennantSchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.send({
    msg: "updated tennant data is",
    result,
  });
});
router.delete("/:id", async (req, res) => {
  const result = await TennantSchema.findByIdAndDelete(req.params.id);
  res.send({
    msg: "deleted tennant data is",
    result,
  });
});

module.exports = router;
