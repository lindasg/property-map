//if run on Heroku, process.env.NODE_ENV will be automatically set to 'production'
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
