const { corsHeaders } = require('../../cors');
const api = require('../../services/printifyApi');

exports.handler = async function findProducts() {
  const response = await api.get('/products.json');
  const extraHeaders = response.status === 200
    ? { 'cache-control': 'public, max-age=600, s-maxage=600' }
    : null;

  return {
    statusCode: response.status,
    headers: {
      'content-type': 'application/json; charset=utf8',
      ...extraHeaders,
      ...corsHeaders(),
    },
    body: JSON.stringify(response.data),
  }
}
