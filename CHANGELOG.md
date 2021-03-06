## Recurly.js CHANGELOG

### Version 3.0.3 (June 10, 2014)

* Added 'phone' and 'vat_number' to list of tokenizable fields[#126][126]
* Added checkbox support to Pricing.prototype.attach [#123][123]
* Fixed issue in Pricing.prototype.attach where addons would attempt to load out of order [#127][127]
* Fixed issue where coupon not found errors would go uncaught in Pricing.prototype.attach [#124][124]
* Fixed coupon rounding behavior in Pricing.prototype.calculations [#125][125]
* Updated testing dependencies [#121][121]

### Version 3.0.2 (June 3, 2014)

* Fixed parse cardType bug [#120][120]
* Fixed issue where publicKey was not sent to the PayPal flow initiation API [#117][117]

### Version 3.0.1 (May 29, 2014)

* Added Plan quantity manipulation to recurly.Pricing [#115][115]

### Version 3.0.0 (May 13, 2014)

* Full rewrite for Billing Info tokenization

[127]: https://github.com/recurly/recurly-js/commit/744942e2922c42ee6a67fb131cdf1f8a208ab797
[126]: https://github.com/recurly/recurly-js/commit/0fa3b8a57a12e89050a51e40e91ec1a9b34bb30e
[125]: https://github.com/recurly/recurly-js/commit/f7072d7387b8a43d41a5ec94bb069a26eb28f19d
[124]: https://github.com/recurly/recurly-js/commit/ce5103a0e67e7c96b61bbbbdc684ebda96f46068
[123]: https://github.com/recurly/recurly-js/commit/85483f9117dc871c3d9a0c0a33fcbe57613ec322
[121]: https://github.com/recurly/recurly-js/commit/5abe15a3054d2ccfe0577c8aecfe26ed081dd7fe
[120]: https://github.com/recurly/recurly-js/commit/05c2f92d503aadbca16f16f9ef063421f03fee19
[117]: https://github.com/recurly/recurly-js/commit/c59123e8703210e190eadef9177204689566eec4
[115]: https://github.com/recurly/recurly-js/commit/53270974d50f4094f3bd18575dad771ba141a63c
