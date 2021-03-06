
/*!
 * Module dependencies.
 */

var type = require('type');
var debug = require('debug')('recurly:coupon');
var errors = require('../errors');

/**
 * Coupon mixin.
 *
 * Retrieves coupon information for the `plan`. The `callback` signature
 * is `err, plan` where `err` may be a request or server error, and `plan`
 * is a representation of the requested plan.
 *
 * @param {Object} options
 * @param {Function} callback
 */

exports.coupon = function (options, callback) {
  debug('%j', options);

  if ('function' !== type(callback)) {
    throw errors('missing-callback');
  }

  if ('object' !== type(options)) {
    throw errors('invalid-options');
  }

  if (!('plan' in options)) {
    throw errors('missing-plan');
  }

  if (!('coupon' in options)) {
    throw errors('missing-coupon');
  }

  this.request('/plans/' + options.plan + '/coupons/' + options.coupon, options, callback);
};
