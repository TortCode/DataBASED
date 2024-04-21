const router = require('express').Router();
const registerService = require('../services/register');

router.post('/', async (req, res) => {
    res.status(201).json(await registerService.register(req.body));
})

module.exports = router;