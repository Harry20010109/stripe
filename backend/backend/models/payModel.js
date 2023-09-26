const mongoose = require('mongoose');

const paySchema = mongoose.Schema(
  {
    price: {
      type: Number,
      required: true,
      ref: 'User',
    },
    type: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Pay', paySchema)
