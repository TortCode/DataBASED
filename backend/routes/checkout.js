const router = require("express").Router();
const checkoutService = require("../services/checkout");

router.post("/", async (req, res) => {
  const result = await checkoutService.checkout(req.body);
  res.status(201).json(result);
});

module.exports = router;
