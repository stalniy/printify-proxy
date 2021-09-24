const arc = require('@architect/functions');
const { liqpay, corsHeaders } = require('@architect/shared');

exports.handler = async function signPaymentLiqpay(req) {
  const body = JSON.parse(arc.http.helpers.bodyParser(req));
  const result = liqpay.signPayment({
    orderId: body.orderId,
    amount: body.price,
    currency: "USD",
    lang: "en",
    phone: body.phone,
  });

  console.log('incomming request', body);
  console.log('signing payment: ', {
    orderId: body.orderId,
    amount: body.price,
    currency: "USD",
    lang: "en",
    phone: body.phone,
  });

  return {
    statusCode: 200,
    headers: {
      'content-type': 'application/json; charset=utf8',
      ...corsHeaders(),
    },
    body: JSON.stringify(result),
  }
}
