const mongoose = require('mongoose');
const Property = mongoose.model('properties');

module.exports = app => {
  app.get('/api/properties', async (req, res) => {
    const properties = await Property.find({}); //.select({dateUpdated: false})
    res.send(properties);
  });
};
