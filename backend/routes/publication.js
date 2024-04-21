const router = require("express").Router();
const publicationService = require("../services/publication");

router.get("/", async (req, res) => {
  res.json(await publicationService.findPublications(req.body));
});

router.post("/", async (req, res) => {
  res.status(201).json(await publicationService.addPublication(req.body));
});

router.delete("/:id", async (req, res) => {
  await publicationService.deletePublication(req.params.id);
  res.status(204).end();
});

module.exports = router;
