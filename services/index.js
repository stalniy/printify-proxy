const api = require('./printifyApi');
const corsHeaders = require('./corsHeaders');
const liqpay = require('./liqpay');

module.exports = {
  corsHeaders,
  api,
  liqpay,
};
