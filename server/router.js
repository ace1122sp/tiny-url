const express = require('express');
const { getShort, createShort, getPopular } = require('./controllers');

const router = express.Router();

router.get('/url/:short', getShort);
router.post('/api/new', createShort);
router.get('/api/popular', getPopular);
router.get('*', (req, res) => {
  res.sendStatus(404);
});

module.exports = router;
