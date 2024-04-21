const router = require("express").Router();
const publicationService = require("../services/publication");

router.get("/", (req, res) => {
  res.json(publicationService.findPublications(req.body));
});

module.exports = router;
