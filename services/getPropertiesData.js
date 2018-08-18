const mongoose = require('mongoose');
const axios = require('axios');
const _ = require('lodash');
const keys = require('../config/keys');

const Property = mongoose.model('properties');

module.exports = async () => {
  let uraToken;

  const d= new Date();
  const month = (d.getMonth() < 10 ? '0':'') + d.getMonth();
  const year = d.getFullYear().toString().substr(2, 3);
  const refPeriod=month+year;
  console.log(refPeriod);

  const getTokenURL='https://www.ura.gov.sg/uraDataService/insertNewToken.action';
  const developerSaleURL=`https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Developer_Sales&refPeriod=${refPeriod}`;
//  const pipelineURL='https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Pipeline';

  try {
    const tokenResponse = await axios({method: 'get', url: getTokenURL, headers: {AccessKey: keys.uraKey}});
    uraToken = tokenResponse.data.Result;
    const developerSaleData = await axios({method: 'get', url: developerSaleURL, headers: {AccessKey: keys.uraKey, Token: uraToken} });

    if (developerSaleData.data.Result.length > 0) {
      await Property.remove({});
      _.map(developerSaleData.data.Result, async data => {
        const property =new Property(data);
        property.dateUpdated = Date();
        await property.save();
      })
    }
  } catch (err) {
    console.log(err)
  }
}
