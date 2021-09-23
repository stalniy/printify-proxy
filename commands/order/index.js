const arc = require('@architect/functions');
const { corsHeaders } = require('../../cors');
const api = require('../../services/printifyApi');

exports.handler = async function order(req) {
  const body = arc.http.helpers.bodyParser(req);
  const response = await api.post('/orders.json', body);

  return {
    statusCode: response.status,
    headers: {
      'content-type': 'application/json; charset=utf8',
      ...corsHeaders(),
    },
    body: JSON.stringify(response.data),
  }
}
