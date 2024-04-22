const router = require("express").Router();
const publicationService = require("../services/publication");

router.get("/", async (req, res) => {
  const result = await publicationService.findPublications(req.query);
  res.json(result);
});

router.post("/", async (req, res) => {
  const result = await publicationService.addPublication(req.body);
  res.status(201).json(result);
});

router.delete("/:id", async (req, res) => {
  await publicationService.deletePublication(req.params.id);
  res.status(204).end();
});

module.exports = router;
