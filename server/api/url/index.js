const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send("Hello from short")
})

module.exports = router;