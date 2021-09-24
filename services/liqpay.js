/* eslint-disable naming-convention */

const { createHash } = require("crypto");
const assert = require("assert");

assert.ok(process.env.LIQPAY_PUBLIC_KEY, 'Please specify LIQPAY_PUBLIC_KEY');
assert.ok(process.env.LIQPAY_PRIVATE_KEY, 'Please specify LIQPAY_PRIVATE_KEY');

exports.signPayment = function signPayment(options) {
  const request = {
    version: 3,
    action: "pay",
    public_key: process.env.LIQPAY_PUBLIC_KEY,
    phone: options.phone,
    amount: options.amount,
    currency: options.currency,
    description: options.description,
    order_id: options.orderId,
    language: options.lang,
    server_url: options.serverUrl,
    result_url: options.resultUrl,
    ip: options.ip,
  };
  console.log('liqpay request', request);
  const data = encodeRequest(request);

  return {
    data,
    signature: sign(data),
    url: "https://www.liqpay.ua/api/3/checkout",
  };
}

function encodeRequest(request) {
  return Buffer.from(JSON.stringify(request)).toString("base64");
}

exports.parseRequest = function parseRequest(options) {
  const signature = sign(options.data);

  if (signature !== options.signature) {
    return null;
  }

  const payload = Buffer.from(options.data, "base64").toString();
  return JSON.parse(payload);
}

function sign(data) {
  const sha1 = createHash("sha1");
  sha1.update(process.env.LIQPAY_PRIVATE_KEY + data + process.env.LIQPAY_PRIVATE_KEY);
  return sha1.digest("base64");
}
