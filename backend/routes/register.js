const router = require('express').Router();
const registerService = require('../services/register');

router.post('/', async (req, res) => {
    const result = await registerService.register(req.body);
    res.status(201).json(result);
})

module.exports = router;