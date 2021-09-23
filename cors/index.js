const assert = require('assert');

assert.ok(process.env.CORS_ORIGIN, 'Please specify CORS_ORIGIN');

exports.handler = function cors() {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Max-Age': '600',
      ...corsHeaders(),
    },
    body: 'test'
  };
}

exports.corsHeaders = corsHeaders;

function corsHeaders() {
  return {
    'access-control-allow-headers': 'X-Requested-With, Content-Type',
    'access-control-allow-methods': 'GET, POST',
    'access-control-allow-origin': process.env.CORS_ORIGIN,
  };
}
