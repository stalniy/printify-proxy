const corsHeaders = require('../services/corsHeaders');

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
