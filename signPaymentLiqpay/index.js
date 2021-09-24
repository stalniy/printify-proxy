const { corsHeaders, liqpay } = require('@architect/shared');
const arc = require('@architect/functions');

exports.handler = function signPaymentLiqpay(req) {
  const body = arc.http.helpers.bodyParser(req);
  const result = liqpay.signPayment({
    orderId: body.orderId,
    amount: body.price,
    currency: "USD",
    lang: "en",
    phone: body.phone,
  });

  console.log('--->', result);

  return {
    statusCode: 200,
    headers: {
      'content-type': 'application/json; charset=utf8',
      ...corsHeaders(),
    },
    body: JSON.stringify(result),
  };
}
