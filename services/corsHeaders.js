const assert = require("assert");

assert.ok(process.env.CORS_ORIGIN, 'Please specify CORS_ORIGIN');

module.exports = function corsHeaders() {
  return {
    'access-control-allow-headers': 'X-Requested-With, Content-Type',
    'access-control-allow-methods': 'GET, POST',
    'access-control-allow-origin': process.env.CORS_ORIGIN,
  };
}
