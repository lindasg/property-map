const mongoose = require('mongoose');
const { Schema } = mongoose;

const developerSaleSchema = new Schema({
  highestPrice: Number,
  soldToDate: Number,
  unitsAvail: Number,
  medianPrice: Number,
  soldInMonth: Number,
  launchedToDate: Number,
  lowestPrice: Number,
  refPeriod: String,
  launchedInMonth: Number
});

module.exports = developerSaleSchema;
