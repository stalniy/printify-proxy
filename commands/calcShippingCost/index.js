const arc = require('@architect/functions');
const { api, corsHeaders } = require('@architect/shared');

exports.handler = async function calcShippingCost(req) {
  const body = arc.http.helpers.bodyParser(req);
  const response = await api.post('/orders/shipping.json', body);

  return {
    statusCode: response.status,
    headers: {
      'content-type': 'application/json; charset=utf8',
      ...corsHeaders(),
    },
    body: JSON.stringify(response.data),
  }
}
