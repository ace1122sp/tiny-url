const express = require('express');
const path = require('path');
const { getShort, createShort, getPopular } = require('./controllers');

const router = express.Router();

router.get('/url/:short', getShort);
router.post('/api/new', createShort);
router.get('/api/popular', getPopular);
router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views', 'index.html'));
});

module.exports = router;
