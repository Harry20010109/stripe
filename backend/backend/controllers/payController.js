const asyncHandler = require('express-async-handler');
const Pay = require('../models/payModel');

const payment = asyncHandler(async (req, res) => {
  const { price, type } = req.body

  if (!price || !type) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  // Create user
  const pay = await Pay.create({
    price,
    type
  })

  if (pay) {
    res.status(201).json(pay);
  } else {
    res.status(400)
    throw new Error('Invalid pay data')
  }
})
module.exports = { payment };