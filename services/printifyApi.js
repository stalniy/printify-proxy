const { default: axios } = require("axios");
const assert = require('assert');

assert.ok(process.env.PRINTIFY_TOKEN, "Please specify PRINTIFY_TOKEN");
assert.ok(process.env.PRINTIFY_SHOP_ID, "Please specify PRINTIFY_SHOP_ID");

module.exports = axios.create({
  baseURL: `https://api.printify.com/v1/shops/${process.env.PRINTIFY_SHOP_ID}`,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    Authorization: `Bearer ${process.env.PRINTIFY_TOKEN}`
  },
  validateStatus: () => true,
});
