const mongoose = require('mongoose');
const { Schema } = mongoose; //const Schema = mongoose.Schema;
const developerSaleSchema = require('./DeveloperSales');

const PropertySchema = new Schema({
  project: String,
  propertyType: String,
  marketSegment: String,
  developer: String,
  street: String,
  developerSales: [developerSaleSchema],
  district: String,
  y: String,
  x: String,
  dateUpdated: String
});

mongoose.model('properties', PropertySchema);
