const express = require('express');
const router = express.Router();
const { payment } = require('../controllers/payController');
router.post('/pay', payment);

router.get('/pay', (req, res) => {
  res.json('wordk');
})


module.exports = router
