const router = require('express').Router();
const returnService = require('../services/return.js');

router.post('/', async (req, res) => {
  await returnService.returnPublication(req.body);
  res.status(204).end();
});

module.exports = router;